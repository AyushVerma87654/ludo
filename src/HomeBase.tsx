import React, { FC } from "react";
import RoundButton from "./RoundButton";

interface HomeBaseProps {
  color: String;
}

const HomeBase: FC<HomeBaseProps> = ({ color }) => {
  let border = "";
  let bgColor = "";
  if (color == "red") {
    bgColor = "bg-red-500";
    border = "border-r-transparent border-b-transparent";
  } else if (color == "blue") {
    bgColor = "bg-blue-500";
    border = "border-r-transparent border-t-transparent";
  } else if (color == "green") {
    bgColor = "bg-green-500";
    border = "border-l-transparent border-b-transparent";
  } else if (color == "yellow") {
    bgColor = "bg-yellow-500";
    border = "border-l-transparent border-t-transparent";
  }
  return (
    <div className={`w-60 h-60 border border-black ${bgColor} ${border}`}>
      <div className="border border-black m-10 bg-white">
        <div className="flex flex-col justify-between h-40 p-4">
          <div className="flex justify-between">
            <RoundButton bgColor={bgColor} buttonId={color + "1"} />
            <RoundButton bgColor={bgColor} buttonId={color + "2"} />
          </div>
          <div className="flex justify-between">
            <RoundButton bgColor={bgColor} buttonId={color + "3"} />
            <RoundButton bgColor={bgColor} buttonId={color + "4"} />
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default HomeBase;
