import React, { FC } from "react";
import Horizontal from "./Horizontal";
import { hor, ver } from "./constants";
import Vertical from "./Vertical";

interface RepeatProps {
  name: String;
  direction: String;
}

const Repeat: FC<RepeatProps> = ({ name, direction }) => {
  const array = [0, 1, 2];

  return (
    <div>
      <div className="">
        {name == hor &&
          array.map((item, index) => (
            <Horizontal middle={index} direction={direction} />
          ))}
      </div>
      <div className="flex">
        {name == ver &&
          array.map((item, index) => (
            <Vertical middle={index} direction={direction} />
          ))}
      </div>
    </div>
  );
};

export default Repeat;
