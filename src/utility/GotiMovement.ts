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
  gotiCutTokenChange: gotiCutTokenType
) => {
  // console.log("goti movement called");
  // console.log("currentPosition", currentPosition);
  // console.log("whichColor", whichColor);
  // console.log("includes", currentPosition.includes(whichColor));
  if (
    diceNumber === 6 &&
    Number.isNaN(+currentPosition) &&
    currentPosition.includes(whichColor)
  ) {
    // console.log("goti movement called insideOne");
    const newPositionData = gotiUnlock(
      currentPosition,
      whichColor,
      positionData
    );
    return newPositionData;
  } else {
    // if (Number.isNaN(+currentPosition)) {
    //   return { newPositionData: positionData, played: true };
    // } else
    if (!Number.isNaN(+currentPosition)) {
      const newPositionData = gotiMovementToForword(
        currentPosition,
        positionData,
        diceNumber,
        whichColor,
        chance,
        gotiCutTokenChange
      );
      return newPositionData;
    }

    return positionData;
  }
};
