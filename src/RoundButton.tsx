import React, { FC } from "react";
import GotiDisplay from "./GotiDisplay";
import { handleClick } from "./utility/OnClickFunction";
import { ConnectedProps, connect } from "react-redux";
import { AppState } from "../redux/reducer";
import {
  chanceOrderSelector,
  chanceSelector,
  positionDataSelector,
  diceNumberSelector,
  playedSelector,
  canPlaySelector,
  gotiCutTokenSelector,
  gotiReachedWinSelector,
} from "../redux/selectors";
import {
  canPlayAction,
  canNotPlayAction,
  hasNotPlayedAction,
  hasPlayedAction,
  positionDataAction,
  gotiCutTokenAction,
  gotiReachedWinAction,
} from "../redux/action/action";

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
  gotiCutToken,
  gotiReachedWin,
  positionDataChange,
  hasPlayedChange,
  canPlayChange,
  canNotPlayChange,
  hasNotPlayedChange,
  gotiCutTokenChange,
  gotiReachedWinChange,
}) => {
  const mainState = {
    positionData,
    canPlay,
    played,
    chance,
    chanceOrder,
    diceNumber,
    gotiCutToken,
    gotiReachedWin,
  };
  let gotiBgColor = "";
  const setMainState = {
    positionDataChange,
    hasPlayedChange,
    canPlayChange,
    canNotPlayChange,
    hasNotPlayedChange,
    gotiCutTokenChange,
    gotiReachedWinChange,
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
  gotiReachedWin: gotiReachedWinSelector(state),
});

const mapDispatchToProps = {
  positionDataChange: positionDataAction,
  canNotPlayChange: canNotPlayAction,
  hasNotPlayedChange: hasNotPlayedAction,
  hasPlayedChange: hasPlayedAction,
  canPlayChange: canPlayAction,
  gotiCutTokenChange: gotiCutTokenAction,
  gotiReachedWinChange: gotiReachedWinAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(RoundButton);
