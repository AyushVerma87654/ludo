import { positionDataType } from "../data";

export const canPlayFunction = (
  whichColor: string,
  positionData: positionDataType,
  diceNumber: number,
  totalPlayers: number
) => {
  let token = false;
  for (let i = 1; i <= totalPlayers; i++) {
    const checkPosition = whichColor + JSON.stringify(i);
    const gotiChanceColor = whichColor.charAt(0).toUpperCase();
    if (positionData[checkPosition].item[0] !== undefined) {
      if (i === 4) {
        return false;
      }
    } else {
      for (let j = 1; j < 6; j++) {
        const newCheckPosition = "C" + gotiChanceColor + j;
        if (positionData[newCheckPosition].item[0] !== undefined) {
          if (j + diceNumber <= 6) {
            return true;
          }
        }
      }
      for (let j = 0; j < 52; j++) {
        for (let x = 0; x < positionData[j].item.length; x++) {
          const item = positionData[j].item[x];
          if (item.charAt(0) === gotiChanceColor) {
            return true;
          }
        }
      }
    }
  }
  return token;
};
