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
} from "../redux/selectors";
import {
  canPlayAction,
  canNotPlayAction,
  hasNotPlayedAction,
  hasPlayedAction,
  positionDataAction,
  gotiCutTokenAction,
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
  positionDataChange,
  hasPlayedChange,
  canPlayChange,
  canNotPlayChange,
  hasNotPlayedChange,
  gotiCutTokenChange,
}) => {
  const mainState = {
    positionData,
    canPlay,
    played,
    chance,
    chanceOrder,
    diceNumber,
    gotiCutToken,
  };
  let gotiBgColor = "";
  const setMainState = {
    positionDataChange,
    hasPlayedChange,
    canPlayChange,
    canNotPlayChange,
    hasNotPlayedChange,
    gotiCutTokenChange,
  };
  const stone: string = positionData[buttonId].item[0]?.charAt(0);
  // console.log("stone", stone);
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

  const eachFunction = (item: { position: string; item: string }) => {
    if (item.item !== "") {
      console.log("not empty", item);
    }
  };
  // console.log("position", position);

  // console.log("chance", chanceOrder[chance]);

  // console.log("position", position);

  // (item) => {
  //   if (item.item !== "") {
  //     console.log("not empty", item);
  //   }
  // };

  // console.log(
  //   " Object.values(position).forEach(eachFunction);",
  //   Object.values(position).forEach((item) => {
  //     if (item.item !== "") {
  //       console.log("not empty", item);
  //     }
  //   })
  // );

  // if (bgColor == "bg-red-500") {
  // }
  // if (data[buttonId].item != "") {
  //   // console.log("data[JSON.stringify(buttonId)].item", data[buttonId].item);
  // }
  // console.log("data[JSON.stringify(buttonId)].item", data[buttonId]);
  // // if()
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
        {/* {Object.values(position).forEach((item) => {
          if (item.item !== "") {
            return <GotiDisplay item={item} />;
          }
        })} */}

        {/* {Object.values(position).filter((item) => {
          if (item.item !== "") {
            return <GotiDisplay item={item} />;
          }
        })} */}
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
});

const mapDispatchToProps = {
  positionDataChange: positionDataAction,
  canNotPlayChange: canNotPlayAction,
  hasNotPlayedChange: hasNotPlayedAction,
  hasPlayedChange: hasPlayedAction,
  canPlayChange: canPlayAction,
  gotiCutTokenChange: gotiCutTokenAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(RoundButton);
