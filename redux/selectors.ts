import { createSelector } from "reselect";
import { AppState } from "./reducer";

export const mainStateSelector = (state: AppState) => state.mainState;

export const chanceSelector = createSelector(
  [mainStateSelector],
  (state) => state.chance
);

export const canPlaySelector = createSelector(
  [mainStateSelector],
  (state) => state.canPlay
);

export const playedSelector = createSelector(
  [mainStateSelector],
  (state) => state.played
);

export const diceNumberSelector = createSelector(
  [mainStateSelector],
  (state) => state.diceNumber
);

export const chanceOrderSelector = createSelector(
  [mainStateSelector],
  (state) => state.chanceOrder
);

export const gotiCutTokenSelector = createSelector(
  [mainStateSelector],
  (state) => state.gotiCutToken
);

export const positionDataSelector = createSelector(
  [mainStateSelector],
  (state) => state.positionData
);
