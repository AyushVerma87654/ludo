import React, { FC, useContext } from "react";
import { StateContext } from "./App";
import { chanceIncrement } from "./utility/ChanceIncrement";

interface DiceRollingProps {
  number: number;
  handleClick: () => void;
}

const DiceRolling: FC<DiceRollingProps> = ({ number, handleClick }) => {
  const { mainState, setMainState } = useContext(StateContext);
  const { chance, chanceOrder, position } = mainState;

  // console.log("chance", chance);

  const handleButtonClick = () => {
    handleClick();
    const newChance = chanceIncrement(chance);
    const newState = { ...mainState, chance: newChance };
    setMainState(newState);
  };

  return (
    <div className="absolute left-0 top-48 p-12">
      <div className="flex gap-5">
        <div>Click on your turn</div>
        <button onClick={() => handleButtonClick()}>Click Here</button>
      </div>
      <div>{number}</div>
    </div>
  );
};

export default DiceRolling;
