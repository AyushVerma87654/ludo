import React, { FC } from "react";
import Style from "./style.module.css";

interface CenterProps {}

const Center: FC<CenterProps> = () => {
  return (
    <>
      <div className="relative h-32 w-32">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-red-500 transform rotate-45"></div>
          <div className="w-full h-full bg-green-500 transform rotate-135"></div>
          <div className="w-full h-full bg-yellow-500 transform rotate-225"></div>
          <div className="w-full h-full bg-blue-500 transform rotate-315"></div>
        </div>
      </div>
    </>
  );
};

export default Center;
