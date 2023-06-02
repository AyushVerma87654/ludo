import React, { FC } from "react";
import { ConnectedProps, connect } from "react-redux";
import { positionDataSelector } from "../redux/selectors";
import { AppState } from "../redux/reducer";

interface DummyCenterProps extends ReduxProps {
  onClick: () => void;
}

const DummyCenter: FC<DummyCenterProps> = ({ onClick, positionData }) => {
  const winArray = [...positionData["win"].item];
  return (
    <div
      className="w-[120px] h-[120px] border border-transparent flex flex-wrap"
      onClick={onClick}
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

const mapDispatchToProps = {};

export type setMainStateType = typeof mapDispatchToProps;

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(DummyCenter);
