import { dataType } from "../data";

export const gotiUnlock = (goti: string, position: dataType) => {
  console.log(goti);
  // console.log(data);

  for (let i = 1; i < 5; i++) {
    const now = goti + JSON.stringify(i);
    console.log(position[now].item);
    if (position[now].item !== "") {
      gotiUnlockToStar(goti, position[now].item, position);
      position[now].item = "";
      break;
    }
  }

  return position;
};

export const gotiUnlockToStar = (
  color: string,
  goti: string,
  position: dataType
) => {
  let index: string;
  if (color == "blue") {
    index = "0";
  } else if (color == "yellow") {
    index = "39";
  } else if (color == "green") {
    index = "26";
  } else if (color == "red") {
    index = "13";
  }
  position[index!].item += goti;
  //   console.log(position[index!].item);
  //   console.log(position);

  return position;
};
