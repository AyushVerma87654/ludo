import React, { FC } from "react";
import { chanceIncrement } from "./utility/ChanceIncrement";
import { numGen } from "./utility/NumberGeneration";
import { canPlayFunction } from "./utility/CanPlay";
import { AppState } from "../redux/reducer";
import {
  chanceOrderSelector,
  chanceSelector,
  positionDataSelector,
  diceNumberSelector,
  canPlaySelector,
  gotiCutTokenSelector,
  gotiReachedWinSelector,
} from "../redux/selectors";
import {
  canNotPlayAction,
  canPlayAction,
  chanceAction,
  diceRollingAction,
  hasNotPlayedAction,
} from "../redux/action/action";
import { ConnectedProps, connect } from "react-redux";

interface DiceRollingProps extends ReduxProps {}

const DiceRolling: FC<DiceRollingProps> = ({
  diceNumberChange,
  chanceChange,
  canPlayChange,
  canNotPlayChange,
  hasNotPlayedChange,
  chance,
  chanceOrder,
  diceNumber,
  positionData,
  canPlay,
  gotiCutToken,
  gotiReachedWinToken,
}) => {
  const handleButtonClick = () => {
    const newDiceNumber = numGen();
    const newChance = chanceIncrement(
      chance,
      diceNumber,
      gotiCutToken,
      gotiReachedWinToken
    );
    if (newDiceNumber == 6) {
      canPlayChange();
    } else {
      if (
        chance !== -1 &&
        canPlayFunction(chanceOrder[newChance], positionData, newDiceNumber)
      ) {
        canPlayChange();
      } else {
        canNotPlayChange();
      }
    }
    chanceChange(newChance);
    diceNumberChange(newDiceNumber);
    hasNotPlayedChange();
  };

  return (
    <div className="absolute left-0 top-0 p-12">
      <div className="flex justify-around">
        <div>
          <button
            className="bg-red-500 text-blue-900 p-2 disabled:bg-white"
            disabled={canPlay}
            onClick={() => handleButtonClick()}
          >
            Click Here
          </button>
          <div>{diceNumber}</div>
          <div>Chance : {chanceOrder[chance]}</div>
        </div>
        {/* <div>
          <button
            className="bg-black text-white p-3"
            onClick={() => handleButtonClick()}
          >
            Skip
          </button>
        </div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  positionData: positionDataSelector(state),
  chance: chanceSelector(state),
  chanceOrder: chanceOrderSelector(state),
  diceNumber: diceNumberSelector(state),
  canPlay: canPlaySelector(state),
  gotiCutToken: gotiCutTokenSelector(state),
  gotiReachedWinToken: gotiReachedWinSelector(state),
});

const mapDispatchToProps = {
  diceNumberChange: diceRollingAction,
  chanceChange: chanceAction,
  hasNotPlayedChange: hasNotPlayedAction,
  canPlayChange: canPlayAction,
  canNotPlayChange: canNotPlayAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(DiceRolling);
