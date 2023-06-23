import React, { FC } from "react";

import {
  chanceOrderSelector,
  chanceSelector,
  diceNumberSelector,
  canPlaySelector,
  positionDataSelector,
  totalPlayersSelector,
  autoPlayTokenSelector,
  autoPlayIndexSelector,
  playedSelector,
  gotiCutTokenSelector,
  gotiReachedWinSelector,
} from "./redux/selectors";
import {
  canPlayAction,
  chanceAction,
  diceRollingAction,
  gotiCutTokenAction,
  gotiReachedWinTokenAction,
  playedAction,
  positionDataChangeAction,
  positionDataFilterAction,
  shortcutAction,
} from "./redux/slices";
import { ConnectedProps, connect } from "react-redux";
import { AppState } from "./redux/store";
import { handleClick } from "./utility/OnClickFunction";

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
  positionDataChange,
  playedChange,
  gotiCutTokenChange,
  gotiReachedWinChange,
  autoPlayToken,
  autoPlayIndex,
  played,
  gotiCutToken,
  gotiReachedWinToken,
}) => {
  const mainState = {
    positionData,
    chance,
    chanceOrder,
    diceNumber,
    played,
    canPlay,
    gotiCutToken,
    gotiReachedWinToken,
    autoPlayToken,
  };
  const setMainState = {
    positionDataChange,
    playedChange,
    canPlayChange,
    gotiCutTokenChange,
    gotiReachedWinChange,
    positionDataFilter,
  };
  const handleButtonClick = () => {
    chanceChange();
    diceNumberChange();
    canPlayChange(positionData);
    positionDataFilter({ positionData, chanceColor: chanceOrder[chance] });
  };
  if (autoPlayToken) {
    handleClick(autoPlayIndex, mainState, setMainState);
  }

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
  totalPlayers: totalPlayersSelector(state),
  autoPlayToken: autoPlayTokenSelector(state),
  autoPlayIndex: autoPlayIndexSelector(state),
  played: playedSelector(state),
  gotiCutToken: gotiCutTokenSelector(state),
  gotiReachedWinToken: gotiReachedWinSelector(state),
});

const mapDispatchToProps = {
  diceNumberChange: diceRollingAction,
  chanceChange: chanceAction,
  canPlayChange: canPlayAction,
  positionDataFilter: positionDataFilterAction,
  shortCut: shortcutAction,
  positionDataChange: positionDataChangeAction,
  playedChange: playedAction,
  gotiCutTokenChange: gotiCutTokenAction,
  gotiReachedWinChange: gotiReachedWinTokenAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(DiceRolling);
