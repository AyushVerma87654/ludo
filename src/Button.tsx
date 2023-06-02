import React, { FC } from "react";
import { GiMoebiusStar } from "react-icons/gi";
import { BsFillStarFill } from "react-icons/bs";
import GotiDisplay from "./GotiDisplay";
import { handleClick } from "./utility/OnClickFunction";
import {
  chanceOrderSelector,
  chanceSelector,
  positionDataSelector,
  diceNumberSelector,
  playedSelector,
  canPlaySelector,
  gotiCutTokenSelector,
  gotiReachedWinSelector,
} from "./redux/selectors";
import { AppState } from "./redux/reducer";
import { ConnectedProps, connect } from "react-redux";
import {
  canPlayAction,
  positionDataAction,
  gotiCutTokenAction,
  gotiReachedWinAction,
  playedAction,
} from "./redux/action/action";

interface ButtonProps extends ReduxProps {
  index: number;
  middle: number;
  name: string;
  direction: String;
}

const Button: FC<ButtonProps> = ({
  index,
  name,
  middle,
  direction,
  positionData,
  canPlay,
  played,
  chance,
  chanceOrder,
  diceNumber,
  gotiCutToken,
  gotiReachedWinToken,
  positionDataChange,
  playedChange,
  canPlayChange,
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
    gotiReachedWinToken,
  };
  const setMainState = {
    positionDataChange,
    playedChange,
    canPlayChange,
    gotiCutTokenChange,
    gotiReachedWinChange,
  };

  let gotiBgColor = "";
  let i: number;
  for (let i = 0; i < 52; i++) {
    const str = positionData[JSON.stringify(i)].item[0];
    if (str !== "") {
      const color: string = str?.charAt(0);
      if (color == "Y") {
        gotiBgColor = "bg-yellow-500";
      } else if (color == "B") {
        gotiBgColor = "bg-blue-500";
      } else if (color == "G") {
        gotiBgColor = "bg-green-500";
      } else if (color == "R") {
        gotiBgColor = "bg-red-500";
      }
    }
  }

  let borderHorizontal = "border-r-transparent ";
  let buttonId: string = "0";
  let star1 = { red: false, blue: false, green: false, yellow: false };
  let star2 = { red: false, blue: false, green: false, yellow: false };
  let bgHorizontal = "";
  let bgVertical = "";
  let borderVertical = "border-b-transparent ";
  if (name == "horizontal") {
    if (direction == "left") {
      if (middle == 2) {
        buttonId = JSON.stringify(10 - index);
      } else if (middle == 1 && index == 0) {
        buttonId = JSON.stringify(11);
      } else if (middle == 1 && index !== 0) {
        buttonId = "CR" + index;
      } else if (middle == 0) {
        buttonId = JSON.stringify(12 + index);
      }
    } else if (direction == "right") {
      if (middle == 2) {
        buttonId = JSON.stringify(43 - index);
      } else if (middle == 1 && index == 5) {
        buttonId = JSON.stringify(37);
      } else if (middle == 1 && index !== 5) {
        buttonId = "CY" + (5 - index);
      } else if (middle == 0) {
        buttonId = JSON.stringify(31 + index);
      }
    }
    if (index == 5) {
      borderHorizontal = "";
    }
    if (middle == 1) {
      borderHorizontal += "border-t-transparent border-b-transparent";
    }
    if (
      (direction == "left" && middle == 2 && index == 2) ||
      (direction == "left" && middle == 1 && index !== 0) ||
      (direction == "left" && middle == 0 && index == 1)
    ) {
      bgHorizontal = "bg-red-500";
      if (middle == 2 && index == 2) {
        star1.red = true;
      } else if (middle == 0 && index == 1) {
        star2.red = true;
      }
    } else if (
      (direction == "right" && middle == 0 && index == 3) ||
      (direction == "right" && middle == 1 && index !== 5) ||
      (direction == "right" && middle == 2 && index == 4)
    ) {
      bgHorizontal = "bg-yellow-500";
      if (middle == 0 && index == 3) {
        star1.yellow = true;
      } else if (middle == 2 && index == 4) {
        star2.yellow = true;
      }
    }
    borderVertical = "";
  } else if (name == "vertical") {
    if (direction == "up") {
      if (middle == 0) {
        buttonId = JSON.stringify(23 - index);
      } else if (middle == 1 && index == 0) {
        buttonId = JSON.stringify(24);
      } else if (middle == 1 && index !== 0) {
        buttonId = "CG" + index;
      } else if (middle == 2) {
        buttonId = JSON.stringify(25 + index);
      }
    } else if (direction == "down") {
      if (middle == 0 && index == 5) {
        buttonId = JSON.stringify(51);
      } else if (middle == 1 && index == 5) {
        buttonId = JSON.stringify(50);
      } else if (middle == 2) {
        buttonId = JSON.stringify(44 + index);
      } else if (middle == 0 && index !== 5) {
        buttonId = JSON.stringify(4 - index);
      } else if (middle == 1 && index !== 5) {
        buttonId = "CB" + (5 - index);
      }
    }
    if (index == 5) {
      borderVertical = "";
    }
    if (middle == 1) {
      borderVertical += "border-r-transparent border-l-transparent";
    }
    if (
      (direction == "up" && middle == 0 && index == 2) ||
      (direction == "up" && middle == 1 && index !== 0) ||
      (direction == "up" && middle == 2 && index == 1)
    ) {
      bgHorizontal = "bg-green-500";
      if (middle == 0 && index == 2) {
        star1.green = true;
      } else if (middle == 2 && index == 1) {
        star2.green = true;
      }
    } else if (
      (direction == "down" && middle == 2 && index == 3) ||
      (direction == "down" && middle == 1 && index !== 5) ||
      (direction == "down" && middle == 0 && index == 4)
    ) {
      bgHorizontal = "bg-blue-500";
      if (middle == 2 && index == 3) {
        star1.blue = true;
      } else if (middle == 0 && index == 4) {
        star2.blue = true;
      }
    }
    borderHorizontal = "";
  }
  const itemFound = Object.values(positionData).find(
    (positionData) =>
      positionData.position === buttonId.toString() && !!positionData.item[0]
  );
  const item = itemFound ? itemFound : undefined;

  return (
    <div
      className={`flex items-center justify-center border border-black w-10 h-10 ${borderHorizontal} ${borderVertical} ${bgHorizontal}  ${bgVertical}`}
      id={buttonId}
      onClick={() => {
        handleClick(buttonId, mainState, setMainState);
      }}
    >
      {(star1.red || star1.yellow || star1.green || star1.blue) && (
        <GiMoebiusStar className="rounded-full flex items-center justify-center h-full w-full text-black" />
      )}
      {(star2.red || star2.yellow || star2.green || star2.blue) && (
        <BsFillStarFill className="rounded-full flex items-center justify-center h-full w-full text-black" />
      )}
      <div className="absolute flex items-center justify-center">
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
});

const mapDispatchToProps = {
  positionDataChange: positionDataAction,
  playedChange: playedAction,
  canPlayChange: canPlayAction,
  gotiCutTokenChange: gotiCutTokenAction,
  gotiReachedWinChange: gotiReachedWinAction,
};

export type setMainStateType = typeof mapDispatchToProps;

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Button);
