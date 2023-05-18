import React, { FC } from "react";
import Button from "./Button";

interface VerticalProps {
  middle: number;
  direction: String;
}

const Vertical: FC<VerticalProps> = ({ middle, direction }) => {
  const array = [0, 1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col">
      {array.map((item, index) => (
        <Button
          name="vertical"
          index={index}
          middle={middle}
          direction={direction}
        />
      ))}
    </div>
  );
};

export default Vertical;
