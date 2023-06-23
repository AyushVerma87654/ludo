import React, { FC } from "react";
import GotiDisplay from "./GotiDisplay";
import { handleClick } from "./utility/OnClickFunction";
import { ConnectedProps, connect } from "react-redux";
import {
  chanceOrderSelector,
  chanceSelector,
  positionDataSelector,
  diceNumberSelector,
  playedSelector,
  canPlaySelector,
  gotiCutTokenSelector,
  gotiReachedWinSelector,
  autoPlayTokenSelector,
} from "./redux/selectors";
import {
  canPlayAction,
  playedAction,
  positionDataChangeAction,
  gotiCutTokenAction,
  gotiReachedWinTokenAction,
  positionDataFilterAction,
} from "./redux/slices";
import { AppState } from "./redux/store";

interface RoundButtonProps extends ReduxProps {
  bgColor: string;
  buttonId: string;
}

const RoundButton: FC<RoundButtonProps> = ({
  bgColor,
  buttonId,
  positionData,
  canPlay,
  played,
  chance,
  chanceOrder,
  diceNumber,
  autoPlayToken,
  gotiCutToken,
  gotiReachedWinToken,
  positionDataChange,
  playedChange,
  canPlayChange,
  gotiCutTokenChange,
  gotiReachedWinChange,
  positionDataFilter,
}) => {
  const mainState = {
    positionData,
    canPlay,
    played,
    chance,
    chanceOrder,
    diceNumber,
    gotiCutToken,
    gotiReachedWinToken,
    autoPlayToken,
  };
  let gotiBgColor = "";
  const setMainState = {
    positionDataChange,
    playedChange,
    canPlayChange,
    gotiCutTokenChange,
    gotiReachedWinChange,
    positionDataFilter,
  };
  const stone: string = positionData[buttonId].item[0]?.charAt(0);
  if (stone == "Y") {
    gotiBgColor = "bg-yellow-500";
  } else if (stone == "B") {
    gotiBgColor = "bg-blue-500";
  } else if (stone == "G") {
    gotiBgColor = "bg-green-500";
  } else if (stone == "R") {
    gotiBgColor = "bg-red-500";
  }

  const itemFound = Object.values(positionData).find(
    (positionData) => positionData.position === buttonId && !!positionData.item
  );
  const item = itemFound ? itemFound.item : undefined;

  return (
    <div
      className={`flex items-center justify-center border border-black rounded-full w-10 h-10 ${bgColor}`}
      onClick={() => {
        handleClick(buttonId, mainState, setMainState);
      }}
    >
      <div className="absolute">
        {item !== undefined ? (
          <>
            <GotiDisplay item={itemFound} />
          </>
        ) : (
          <></>
        )}
      </div>
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
  gotiReachedWinToken: gotiReachedWinSelector(state),
  autoPlayToken: autoPlayTokenSelector(state),
});

const mapDispatchToProps = {
  positionDataChange: positionDataChangeAction,
  playedChange: playedAction,
  canPlayChange: canPlayAction,
  gotiCutTokenChange: gotiCutTokenAction,
  gotiReachedWinChange: gotiReachedWinTokenAction,
  positionDataFilter: positionDataFilterAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(RoundButton);
