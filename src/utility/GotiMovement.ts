import { positionDataType } from "../data";
import { gotiCutTokenType } from "../models/MainState";
import { gotiMovementToForword } from "./GotiMovementToForword";
import { gotiUnlock } from "./GotiUnlock";

export const gotiMovement = (
  currentPosition: string,
  whichColor: string,
  positionData: positionDataType,
  diceNumber: number,
  chance: number,
  gotiCutTokenChange: gotiCutTokenType,
  gotiReachedWinChange: gotiCutTokenType
) => {
  if (
    diceNumber === 6 &&
    Number.isNaN(+currentPosition) &&
    currentPosition.includes(whichColor)
  ) {
    console.log("goti movement called insideOne");
    const newPositionData = gotiUnlock(
      currentPosition,
      whichColor,
      positionData
    );
    return newPositionData;
  } else if (
    currentPosition.charAt(0) === "C" ||
    Number.isNaN(+currentPosition) === false
  ) {
    const newPositionData = gotiMovementToForword(
      currentPosition,
      positionData,
      diceNumber,
      whichColor,
      chance,
      gotiCutTokenChange,
      gotiReachedWinChange
    );
    return newPositionData;
  }
  return positionData;
};
