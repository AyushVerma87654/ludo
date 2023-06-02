import { positionDataType } from "../data";

export const pushPop = (
  moveGoti: string,
  currentPosition: string,
  positionData: positionDataType,
  popGoti?: string
): positionDataType => {
  if (moveGoti === "" && popGoti !== undefined) {
    const index = positionData[currentPosition].item.indexOf(popGoti);
    let newArray = [...positionData[currentPosition].item];
    if (index > -1) {
      newArray.splice(index, 1);
    }

    return {
      ...positionData,
      [currentPosition]: {
        position: currentPosition,
        item: [...newArray],
      },
    };
  } else if (moveGoti === "") {
    return {
      ...positionData,
      [currentPosition]: {
        position: currentPosition,
        item: [] as string[],
      },
    };
  } else {
    return {
      ...positionData,
      [currentPosition]: {
        position: currentPosition,
        item: [...positionData[currentPosition].item, moveGoti],
      },
    };
  }
};
