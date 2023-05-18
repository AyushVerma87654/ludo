import { dataType } from "../data";

export type mainStateType = {
  chance: number;
  chanceOrder: { [a: number]: string };
  position: dataType;
};

export type ContextType = {
  mainState: mainStateType;
  setMainState: (a: mainStateType) => void;
};
