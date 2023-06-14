import { createSelector } from "reselect";
import { AppState } from "./store";

export const mainStateSelector = (state: AppState) => state.main;

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

export const gotiReachedWinSelector = createSelector(
  [mainStateSelector],
  (state) => state.gotiReachedWinToken
);

export const totalPlayersSelector = createSelector(
  [mainStateSelector],
  (state) => state.totalPlayers
);
