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
  playedSelector,
  canPlaySelector,
  gotiCutTokenSelector,
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
  played,
  canPlay,
  gotiCutToken,
}) => {
  // const mainState = {
  //   chance,
  //   chanceOrder,
  //   diceNumber,
  //   positionData,
  //   played,
  //   canPlay,
  // };
  // console.log("chance", chance);
  const handleButtonClick = () => {
    const newDiceNumber = numGen();
    console.log("newDiceNumber", newDiceNumber);
    const newChance = chanceIncrement(chance, diceNumber, gotiCutToken);
    // if (played === false) {
    if (newDiceNumber == 6) {
      canPlayChange();
    } else {
      if (
        chance !== -1 &&
        canPlayFunction(chanceOrder[newChance], positionData)
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
  );
};

const mapStateToProps = (state: AppState) => ({
  positionData: positionDataSelector(state),
  chance: chanceSelector(state),
  chanceOrder: chanceOrderSelector(state),
  diceNumber: diceNumberSelector(state),
  played: playedSelector(state),
  canPlay: canPlaySelector(state),
  gotiCutToken: gotiCutTokenSelector(state),
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
