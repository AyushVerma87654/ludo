import React, { FC } from "react";
import Repeat from "./Repeat";
import { hor, ver } from "./constants";
import HomeBase from "./HomeBase";
import DummyCenter from "./DummyCenter";
import DiceRolling from "./DiceRolling";

interface InterfaceProps {}

const Interface: FC<InterfaceProps> = ({}) => {
  return (
    <div className="my-6">
      <div className="flex">
        <HomeBase color="red" />
        <Repeat name={ver} direction="up" />
        <HomeBase color="green" />
      </div>
      <div className="flex">
        <Repeat name={hor} direction="left" />
        <DummyCenter />
        <Repeat name={hor} direction="right" />
      </div>
      <div className="flex">
        <HomeBase color="blue" />
        <Repeat name={ver} direction="down" />
        <HomeBase color="yellow" />
      </div>
      <DiceRolling />
    </div>
  );
};

export default Interface;
