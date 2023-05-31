import { positionDataType } from "../data";

export const canPlayFunction = (
  whichColor: string,
  positionData: positionDataType
) => {
  for (let i = 1; i < 5; i++) {
    const checkPosition = whichColor + JSON.stringify(i);
    // console.log(whichColor, checkPosition);
    // console.log(
    //   "positionData[checkPosition].item[0]",
    //   positionData[checkPosition].item[0]
    // );
    if (positionData[checkPosition].item[0] === undefined) {
      return true;
    }
  }
  return false;
};
