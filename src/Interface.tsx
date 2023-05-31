import React, { FC } from "react";
import Repeat from "./Repeat";
import { hor, ver } from "./constants";
import HomeBase from "./HomeBase";
import DummyCenter from "./DummyCenter";
import DiceRolling from "./DiceRolling";

interface InterfaceProps {}

const Interface: FC<InterfaceProps> = ({}) => {
  const handleClick = () => console.log("win");

  return (
    <div className="">
      <div className="flex">
        <HomeBase color="red" />
        <Repeat name={ver} direction="up" />
        <HomeBase color="green" />
      </div>
      <div className="flex">
        <Repeat name={hor} direction="left" />
        <DummyCenter onClick={() => handleClick()} />
        <Repeat name={hor} direction="right" />
      </div>
      <div className="flex">
        <HomeBase color="blue" />
        <Repeat name={ver} direction="down" />
        <HomeBase color="yellow" />
      </div>
      <DiceRolling />

      <div></div>
    </div>
  );
};

export default Interface;
