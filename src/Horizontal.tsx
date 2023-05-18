import React, { FC } from "react";
import Button from "./Button";
import { hor } from "./constants";

interface HorizontalProps {
  middle: number;
  direction: String;
}

const Horizontal: FC<HorizontalProps> = ({ middle, direction }) => {
  const array = [0, 1, 2, 3, 4, 5];
  return (
    <div className="flex">
      {array.map((item, index) => (
        <Button
          name={hor}
          index={index}
          middle={middle}
          direction={direction}
        />
      ))}
    </div>
  );
};

export default Horizontal;
