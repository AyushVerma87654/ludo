import { StateActionType } from "./constants";
import { data, positionDataType } from "../../src/data";

export const diceRollingAction = (diceNumber: number) => ({
  type: StateActionType.DICE_NUMBER,
  payload: diceNumber,
});

export const chanceAction = (chance: number) => ({
  type: StateActionType.CHANCE,
  payload: chance,
});

export const positionDataAction = (positionData: positionDataType) => ({
  type: StateActionType.POSITION_DATA,
  payload: positionData,
});

export const hasPlayedAction = () => ({
  type: StateActionType.HAS_PLAYED,
});

export const hasNotPlayedAction = () => ({
  type: StateActionType.HAS_NOT_PLAYED,
});

export const canPlayAction = () => ({
  type: StateActionType.CAN_PLAY,
});

export const canNotPlayAction = () => ({
  type: StateActionType.CAN_NOT_PLAY,
});

export const gotiCutTokenAction = () => ({
  type: StateActionType.GOTI_CUT_TOKEN,
});
