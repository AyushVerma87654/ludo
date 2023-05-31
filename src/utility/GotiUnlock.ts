import { positionDataType } from "../data";
import { pushPop } from "./PushPop";

export const gotiUnlock = (
  currentPosition: string,
  whichColor: string,
  positionData: positionDataType
) => {
  // if(positionData[currentPosition].item)
  // console.log(currentPosition);
  // console.log("positionData", positionData[currentPosition]);
  // console.log("currentGoti", positionData[currentPosition].item[0]);
  const moveGoti = positionData[currentPosition].item[0];
  console.log(moveGoti);
  positionData = pushPop("", currentPosition, positionData);
  console.log(
    "newPositionData1[currentPosition].item",
    positionData[currentPosition].item
  );
  console.log(positionData);
  const newPositionData = gotiUnlockToStar(whichColor, moveGoti, positionData);

  return newPositionData;
};

const gotiUnlockToStar = (
  whichColor: string,
  moveGoti: string,
  positionData: positionDataType
) => {
  // console.log("moveGoti", moveGoti);
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
