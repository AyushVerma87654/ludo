import { positionDataType } from "../data";
import { pushPop } from "./PushPop";

export const gotiUnlock = (
  currentPosition: string,
  whichColor: string,
  positionData: positionDataType
) => {
  const moveGoti = positionData[currentPosition].item[0];
  positionData = pushPop("", currentPosition, positionData);
  const newPositionData = gotiUnlockToStar(whichColor, moveGoti, positionData);

  return newPositionData;
};

const gotiUnlockToStar = (
  whichColor: string,
  moveGoti: string,
  positionData: positionDataType
) => {
  let index = "";
  if (whichColor == "blue") {
    index = "0";
  } else if (whichColor == "yellow") {
    index = "39";
  } else if (whichColor == "green") {
    index = "26";
  } else if (whichColor == "red") {
    index = "13";
  }
  return pushPop(moveGoti, index, positionData);
};
export default gotiUnlockToStar;
