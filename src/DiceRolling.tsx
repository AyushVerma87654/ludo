import React, { FC } from "react";
import { AppState } from "./redux/reducer";
import {
  chanceOrderSelector,
  chanceSelector,
  diceNumberSelector,
  canPlaySelector,
  positionDataSelector,
} from "./redux/selectors";
import {
  canPlayAction,
  chanceAction,
  diceRollingAction,
  positionDataFilterAction,
  shortcutAction,
} from "./redux/action/action";
import { ConnectedProps, connect } from "react-redux";

interface DiceRollingProps extends ReduxProps {}

const DiceRolling: FC<DiceRollingProps> = ({
  diceNumberChange,
  chanceChange,
  canPlayChange,
  chance,
  chanceOrder,
  diceNumber,
  canPlay,
  positionData,
  positionDataFilter,
  shortCut,
}) => {
  const handleButtonClick = () => {
    chanceChange();
    diceNumberChange();
    canPlayChange(null);
    positionDataFilter(positionData);
  };

  return (
    <div className="absolute left-0 top-0 p-12">
      <div className="flex space-x-4">
        <div className="w-24">
          <button
            className="bg-red-500 text-blue-900 p-2 disabled:bg-white"
            disabled={canPlay}
            onClick={() => handleButtonClick()}
          >
            Click Here
          </button>
          <div>{diceNumber}</div>
          {chance !== -1 && <div>Chance : {chanceOrder[chance]}</div>}
        </div>
        {/* <div>
          <button
            className="bg-black text-white p-3"
            onClick={() => handleButtonClick()}
          >
            Skip
          </button>
        </div>
        <div>
          <button
            className="bg-black text-white p-3"
            onClick={() => {
              shortCut();
              chanceChange();
              canPlayChange(null);
            }}
          >
            6
          </button>
        </div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  chance: chanceSelector(state),
  chanceOrder: chanceOrderSelector(state),
  diceNumber: diceNumberSelector(state),
  canPlay: canPlaySelector(state),
  positionData: positionDataSelector(state),
});

const mapDispatchToProps = {
  diceNumberChange: diceRollingAction,
  chanceChange: chanceAction,
  canPlayChange: canPlayAction,
  positionDataFilter: positionDataFilterAction,
  shortCut: shortcutAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(DiceRolling);
