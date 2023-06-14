import React, { FC } from "react";
import { ConnectedProps, connect } from "react-redux";
import { positionDataSelector } from "./redux/selectors";
import { mapObject } from "./data";
import { playerWinAction } from "./redux/slices";
import { AppState } from "./redux/store";

interface DummyCenterProps extends ReduxProps {}

const DummyCenter: FC<DummyCenterProps> = ({ positionData, playerWin }) => {
  const winArray = [...positionData["win"].item];
  const handleClick = () => console.log("win");
  let object: { [a: string]: number } = {
    B: 0,
    Y: 0,
    G: 0,
    R: 0,
  };
  winArray.map((item) => {
    object[item.charAt(0)] += 1;
  });
  Object.keys(object).map((item, index) => {
    if (object[item] === 4) {
      playerWin({ color: mapObject[item], index: index });
    }
  });

  return (
    <div
      className="w-[120px] h-[120px] border border-transparent flex flex-wrap"
      onClick={handleClick}
    >
      <div className="flex items-center justify-center flex-wrap">
        {winArray.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center border-4 border-black rounded-full w-6 h-6 ${
              (item.charAt(0) === "R" && "bg-red-500") ||
              (item.charAt(0) === "G" && "bg-green-500") ||
              (item.charAt(0) === "Y" && "bg-yellow-500") ||
              (item.charAt(0) === "B" && "bg-blue-500")
            }`}
          >
            <div className="border border-black bg-black rounded-full w-1.5 h-1.5"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  positionData: positionDataSelector(state),
});

const mapDispatchToProps = {
  playerWin: playerWinAction,
};

export type setMainStateType = typeof mapDispatchToProps;

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(DummyCenter);
