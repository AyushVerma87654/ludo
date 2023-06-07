import { StateActionType } from "./constants";
import { data, positionDataType } from "../../data";

export const diceRollingAction = () => ({
  type: StateActionType.DICE_NUMBER,
});

export const chanceAction = () => ({
  type: StateActionType.CHANCE,
});

export const positionDataAction = (positionData: positionDataType) => ({
  type: StateActionType.POSITION_DATA,
  payload: positionData,
});

export const playedAction = (token: boolean) => ({
  type: StateActionType.PLAYED,
  payload: token,
});

export const canPlayAction = (token: boolean | null) => ({
  type: StateActionType.CAN_PLAY,
  payload: token,
});

export const gotiCutTokenAction = () => ({
  type: StateActionType.GOTI_CUT_TOKEN,
});

export const gotiReachedWinAction = () => ({
  type: StateActionType.GOTI_REACHED_WIN,
});

export const playerWinAction = (data: { color: string; index: number }) => ({
  type: StateActionType.PLAYER_WIN,
  payload: data,
});

export const positionDataFilterAction = (data: positionDataType) => ({
  type: StateActionType.POSITION_DATA_FILTER,
  payload: data,
});

export const shortcutAction = () => ({
  type: StateActionType.SHORTCUT,
});
