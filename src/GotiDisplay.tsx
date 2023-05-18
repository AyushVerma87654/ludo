import React, { FC } from "react";

interface GotiDisplayProps {
  bgColor?: string;
  item?: {
    position: string;
    item: string;
  };
}

const GotiDisplay: FC<GotiDisplayProps> = ({ bgColor, item }) => {
  // console.log("item", item);
  // if (item.item == "") {
  //   return <div>hello</div>;
  // }
  return (
    // <div>
    <div className="absolute flex items-center justify-center border border-black bg-black rounded-full w-6 h-6">
      <div
        className={`flex items-center justify-center border border-black rounded-full w-5 h-5 ${bgColor}`}
      >
        <div className="border border-black bg-black rounded-full w-1.5 h-1.5"></div>
      </div>
    </div>
    // </div>
  );
};

export default GotiDisplay;
