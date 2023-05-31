import React, { FC } from "react";

interface GotiDisplayProps {
  bgColors?: string;
  item?: {
    position: string;
    item: string[];
  };
}

const GotiDisplay: FC<GotiDisplayProps> = ({ item }) => {
  let bgColor = "";
  let firstCharacter = item?.item[0]?.charAt(0);
  if (firstCharacter == "B") {
    bgColor = "bg-blue-500";
  } else if (firstCharacter == "G") {
    bgColor = "bg-green-500";
  } else if (firstCharacter == "R") {
    bgColor = "bg-red-500";
  } else if (firstCharacter == "Y") {
    bgColor = "bg-yellow-500";
  }
  // console.log("item", item, bgColor);
  // console.log("item", item);
  // if (item.item == "") {
  //   return <div>hello</div>;
  // }
  return (
    <div>
      {item?.item[0] && (
        <div
          className={`flex items-center justify-center border-4 border-black rounded-full w-6 h-6 ${bgColor}`}
        >
          <div className="border border-black bg-black rounded-full w-1.5 h-1.5"></div>
        </div>
      )}
    </div>
  );
};

export default GotiDisplay;
