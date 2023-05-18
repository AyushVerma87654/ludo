import React, { FC, useContext, useEffect } from "react";
import Repeat from "./Repeat";
import { hor, ver } from "./constants";
import HomeBase from "./HomeBase";
import Center from "./Center";
import DummyCenter from "./DummyCenter";
import { numGen } from "./utility/NumberGeneration";
import DiceRolling from "./DiceRolling";
import { StateContext } from "./App";
import { gotiUnlock } from "./utility/GotiUnlock";

interface InterfaceProps {}

const Interface: FC<InterfaceProps> = () => {
  const num = numGen();
  const [number, setNumber] = React.useState(3);
  const [token, setToken] = React.useState(false);
  useEffect(() => {
    if (token) {
      setNumber(num);
      setToken(false);
    }
  }, [token]);
  const handleClick = () => console.log(6);
  const handleButtonClick = () => setToken(true);

  const { mainState, setMainState } = useContext(StateContext);
  const { chance, chanceOrder, position } = mainState;
  React.useEffect(() => {
    if (number == 6) {
      const d = gotiUnlock(chanceOrder[chance], position);
      const newState = { ...mainState, position: d };
      setMainState(newState);
    }
  }, [number]);

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
      <DiceRolling number={number} handleClick={handleButtonClick} />

      <div></div>
    </div>
  );
};

export default Interface;
