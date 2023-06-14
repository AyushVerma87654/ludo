import { mapObject, positionDataType } from "../data";
import { gotiCutTokenType } from "../models/MainState";
import { pushPop } from "./PushPop";

export const gotiMovementToForword = (
  currentPosition: string,
  position: positionDataType,
  diceNumber: number,
  whichColor: string,
  gotiCutTokenChange: gotiCutTokenType,
  gotiReachedWinChange: gotiCutTokenType
) => {
  let moveGoti = "";
  const chanceColor = whichColor.charAt(0).toUpperCase();
  position[currentPosition].item.map((item) => {
    if (chanceColor === item.charAt(0)) {
      moveGoti = item;
    }
  });
  const gotiColor = moveGoti.charAt(0);
  if (gotiColor === chanceColor) {
    position = pushPop("", currentPosition, position, moveGoti);
    if (currentPosition.charAt(0) === "C") {
      // this is checking of win line goti move
      position[currentPosition].item.map((item) => {
        if (chanceColor === item.charAt(0)) {
          moveGoti = item;
        }
      });
      const newCurrentPosition = winLineGotiMove(currentPosition, diceNumber);
      if (newCurrentPosition === "win") {
        gotiReachedWinChange();
      }
      position = {
        ...position,
        [newCurrentPosition]: {
          position: newCurrentPosition,
          item: [...position[newCurrentPosition].item, moveGoti],
        },
      };
    } else {
      let newCurrentPosition = +currentPosition + diceNumber;
      let newCurrentPositionString = swapDirection(
        +currentPosition,
        diceNumber,
        gotiColor
      );

      if (
        newCurrentPositionString.charAt(0) === "C" ||
        newCurrentPositionString.charAt(0) === "w"
      ) {
        position = pushPop(moveGoti, newCurrentPositionString, position);
      } else if (!Number.isNaN(+newCurrentPositionString)) {
        newCurrentPositionString = JSON.stringify(
          swapPosition(gotiColor, newCurrentPosition)
        );
        if (
          newCurrentPositionString === "0" ||
          newCurrentPositionString === "8" ||
          newCurrentPositionString === "13" ||
          newCurrentPositionString === "21" ||
          newCurrentPositionString === "26" ||
          newCurrentPositionString === "34" ||
          newCurrentPositionString === "39" ||
          newCurrentPositionString === "47"
        ) {
          position = pushPop(moveGoti, newCurrentPositionString, position);
        } else {
          if (position[newCurrentPositionString].item.length === 0) {
            position = pushPop(moveGoti, newCurrentPositionString, position);
          } else {
            const newArray = position[newCurrentPositionString].item;
            for (let k = 0; k < newArray.length; k++) {
              const item = newArray[k];
              if (
                item.charAt(0).toUpperCase() ===
                whichColor.charAt(0).toUpperCase()
              ) {
                position = pushPop(
                  moveGoti,
                  newCurrentPositionString,
                  position
                );
                console.log("position", position);
                return position;
              } else {
                position = gotiCut(
                  position[newCurrentPositionString].item[0],
                  newCurrentPositionString,
                  position,
                  gotiCutTokenChange
                );
                position = pushPop(
                  moveGoti,
                  newCurrentPositionString,
                  position
                );
              }
            }
          }
        }
      }
    }
  }
  return position;
};

const swapDirection = (
  currentPosition: number,
  diceNumber: number,
  gotiColor: string
) => {
  const breakPointsValues: { [a: string]: number } = {
    B: 50,
    R: 11,
    G: 24,
    Y: 37,
  };
  const breakPointsIndex = breakPointsValues[gotiColor];

  if (breakPointsIndex >= currentPosition) {
    for (let i = 1; i <= 6; i++) {
      if (currentPosition + diceNumber === breakPointsIndex + i && i !== 6) {
        return "C" + gotiColor + JSON.stringify(i);
      } else if (
        currentPosition + diceNumber === breakPointsIndex + i &&
        i === 6
      ) {
        return "win";
      }
    }
  }
  return JSON.stringify(currentPosition + diceNumber);
};

const swapPosition = (gotiColor: string, currentPosition: number) => {
  if (gotiColor !== "B") {
    if (currentPosition > 51) {
      return currentPosition - 51 - 1;
    }
  }
  return currentPosition;
};

const gotiCut = (
  goti: string,
  currentPosition: string,
  positionData: positionDataType,
  gotiCutTokenChange: gotiCutTokenType
) => {
  positionData = pushPop("", currentPosition, positionData, goti);
  const gotiColor = goti.charAt(0);

  Object.keys(mapObject).map((item) => {
    if (gotiColor === item) {
      positionData = gotiCutSwap(mapObject[item], positionData, goti);
      gotiCutTokenChange();
    }
  });
  return positionData;
};

const gotiCutSwap = (
  baseIndex: string,
  positionData: positionDataType,
  goti: string
) => {
  for (let i = 1; i <= 4; i++) {
    const newBaseIndex = baseIndex + JSON.stringify(i);
    if (positionData[newBaseIndex].item[0] === undefined) {
      positionData = pushPop(goti, newBaseIndex, positionData);
      return positionData;
    }
  }
  return positionData;
};

export const winLineGotiMove = (
  currentPosition: string,
  diceNumber: number
) => {
  const lastIndex = +currentPosition.charAt(2);
  let newIndex = "";
  if (lastIndex + diceNumber === 6) {
    newIndex = "win";
  } else if (lastIndex + diceNumber < 6) {
    newIndex =
      currentPosition.substring(0, 2) + JSON.stringify(lastIndex + diceNumber);
  }
  return newIndex;
};
