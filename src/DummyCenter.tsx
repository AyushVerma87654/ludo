import React, { FC } from "react";

interface DummyCenterProps {
  onClick: () => void;
}

const DummyCenter: FC<DummyCenterProps> = ({ onClick }) => {
  return (
    <div
      className="w-[120px] h-[120px] border border-transparent"
      onClick={onClick}
    ></div>
  );
};

export default DummyCenter;
