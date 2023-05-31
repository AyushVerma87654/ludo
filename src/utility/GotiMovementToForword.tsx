import { positionDataType } from "../data";
import { gotiCutTokenType } from "../models/MainState";
import { pushPop } from "./PushPop";

export const gotiMovementToForword = (
  currentPosition: string,
  position: positionDataType,
  diceNumber: number,
  whichColor: string,
  chance: number,
  gotiCutTokenChange: gotiCutTokenType
) => {
  let moveGoti = "";
  const chanceColor = whichColor.charAt(0).toUpperCase();
  position[currentPosition].item.map((item) => {
    if (chanceColor === item.charAt(0)) {
      moveGoti = item;
    }
  });
  // console.log("moveGoti", moveGoti);
  const gotiColor = moveGoti.charAt(0);
  // console.log("whichColor", chanceColor);
  // console.log("gotiColor", gotiColor);
  if (gotiColor === chanceColor) {
    position = pushPop("", currentPosition, position, moveGoti);
    let newCurrentPosition = +currentPosition + diceNumber;
    let newCurrentPositionString = swapDirection(
      +currentPosition,
      diceNumber,
      gotiColor
    );
    console.log("newCurrentPositionString", newCurrentPositionString);

    if (!Number.isNaN(+newCurrentPositionString)) {
      console.log("if called");
      position = pushPop(moveGoti, newCurrentPositionString, position);
    } else {
      newCurrentPositionString = JSON.stringify(
        swapPosition(gotiColor, newCurrentPosition)
      );
      console.log("else called");
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
        console.log("inside if called");
        position = pushPop(moveGoti, newCurrentPositionString, position);
      } else {
        // console.log("inside else called");
        console.log(
          "position[newCurrentPositionString]",
          newCurrentPositionString
        );
        // let token = false;
        if (position[newCurrentPositionString].item.length === 0) {
          position = pushPop(moveGoti, newCurrentPositionString, position);
        } else {
          position[newCurrentPositionString].item.map((item) => {
            if (
              item.charAt(0).toUpperCase() ===
              whichColor.charAt(0).toUpperCase()
            ) {
              console.log("inside if called");
              position = pushPop(moveGoti, newCurrentPositionString, position);
            } else {
              console.log("inside else called");
              console.log("newCurrentPositionString", newCurrentPositionString);

              position = gotiCut(
                position[newCurrentPositionString].item[0],
                newCurrentPositionString,
                position,
                chance,
                gotiCutTokenChange
              );
              position = pushPop(moveGoti, newCurrentPositionString, position);
            }
          });
        }
      }
    }
  }
  console.log("position", position);
  return position;
};

const swapDirection = (
  currentPosition: number,
  diceNumber: number,
  gotiColor: string
) => {
  let newCurrentPosition = "";
  const breakPointsValues: { [a: string]: number } = {
    B: 50,
    R: 11,
    G: 24,
    Y: 37,
  };
  const breakPointsIndex = breakPointsValues[gotiColor];
  if (
    (gotiColor === "B" && breakPointsIndex >= currentPosition) ||
    (gotiColor === "G" && breakPointsIndex >= currentPosition) ||
    (gotiColor === "R" && breakPointsIndex >= currentPosition) ||
    (gotiColor === "Y" && breakPointsIndex >= currentPosition)
  ) {
    console.log("breakPointsIndex", breakPointsIndex);
    console.log("currentPosition", currentPosition);
    for (let i = 1; i < 6; i++) {
      if (currentPosition + diceNumber === breakPointsIndex + i) {
        console.log("if callled");
        newCurrentPosition = "C" + gotiColor + JSON.stringify(i);
        console.log("newCurrentPosition", newCurrentPosition);
        return newCurrentPosition;
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
  chance: number,
  gotiCutTokenChange: gotiCutTokenType
) => {
  positionData = pushPop("", currentPosition, positionData, goti);
  const gotiColor = goti.charAt(0);
  if (gotiColor === "R") {
    positionData = gotiCutSwap("red", positionData, goti, chance);
    gotiCutTokenChange();
  } else if (gotiColor === "G") {
    positionData = gotiCutSwap("green", positionData, goti, chance);
    gotiCutTokenChange();
  } else if (gotiColor === "B") {
    positionData = gotiCutSwap("blue", positionData, goti, chance);
    gotiCutTokenChange();
  } else if (gotiColor === "Y") {
    positionData = gotiCutSwap("yellow", positionData, goti, chance);
    gotiCutTokenChange();
  }
  return positionData;
};

const gotiCutSwap = (
  baseIndex: string,
  positionData: positionDataType,
  goti: string,
  chance: number
) => {
  for (let i = 1; i <= 4; i++) {
    const newBaseIndex = baseIndex + JSON.stringify(i);
    console.log("baseIndex", baseIndex);
    console.log("newBaseIndex", newBaseIndex);
    console.log("goti", goti);
    if (positionData[newBaseIndex].item[0] === undefined) {
      positionData = pushPop(goti, newBaseIndex, positionData);
      return positionData;
    }
  }
  return positionData;
};
