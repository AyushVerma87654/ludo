import {
  gotiCutTokenType,
  gotiReachedWinChangeType,
  positionDataType,
} from "../models/MainState";
import { gotiMovementToForword } from "./GotiMovementToForword";
import { gotiUnlock } from "./GotiUnlock";

export const gotiMovement = (
  currentPosition: string,
  whichColor: string,
  positionData: positionDataType,
  diceNumber: number,
  gotiCutTokenChange: gotiCutTokenType,
  gotiReachedWinChange: gotiReachedWinChangeType
) => {
  if (
    diceNumber === 6 &&
    Number.isNaN(+currentPosition) &&
    currentPosition.includes(whichColor)
  ) {
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
      gotiCutTokenChange,
      gotiReachedWinChange
    );
    return newPositionData;
  }
  return positionData;
};
