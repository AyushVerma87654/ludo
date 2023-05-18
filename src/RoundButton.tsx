import React, { FC, useContext } from "react";
// import { data } from "./data";
import GotiDisplay from "./GotiDisplay";
import { StateContext } from "./App";

interface RoundButtonProps {
  bgColor: string;
  buttonId: string;
}

const RoundButton: FC<RoundButtonProps> = ({ bgColor, buttonId }) => {
  const { mainState, setMainState } = useContext(StateContext);
  const { chance, chanceOrder, position } = mainState;
  let gotiBgColor = "";
  const handleClick = (buttonId: string) => console.log("buttonId", buttonId);
  const stone: string = position[buttonId].item?.charAt(0);
  // console.log("stone", stone);
  if (stone == "Y") {
    gotiBgColor = "bg-yellow-500";
  } else if (stone == "B") {
    gotiBgColor = "bg-blue-500";
  } else if (stone == "G") {
    gotiBgColor = "bg-green-500";
  } else if (stone == "R") {
    gotiBgColor = "bg-red-500";
  }

  // if (bgColor == "bg-red-500") {
  // }
  // if (data[buttonId].item != "") {
  //   // console.log("data[JSON.stringify(buttonId)].item", data[buttonId].item);
  // }
  // // console.log("data[JSON.stringify(buttonId)].item", data[buttonId]);
  // // if()
  return (
    <div
      className={`flex items-center justify-center border border-black rounded-full w-10 h-10 ${bgColor}`}
      onClick={() => handleClick(buttonId)}
    >
      {stone && <GotiDisplay bgColor={gotiBgColor} />}
    </div>
  );
};

export default RoundButton;
