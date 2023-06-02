import { produce } from "immer";
import { data, positionDataType } from "../../src/data";
import { chanceOrder } from "../../src/data";
import { StateActionType } from "../action/constants";
import { Action } from "../action/index";

export type mainState = {
  chance: number;
  chanceOrder: { [a: number]: string };
  positionData: positionDataType;
  diceNumber: number;
  played: boolean;
  canPlay: boolean;
  gotiCutToken: boolean;
  gotiReachedWin: boolean;
};

const initialState: mainState = {
  chance: -1,
  chanceOrder,
  positionData: data,
  diceNumber: 3,
  played: false,
  canPlay: false,
  gotiCutToken: false,
  gotiReachedWin: false,
};

const MainReducer = (mainState: mainState = initialState, action: Action) => {
  switch (action.type) {
    case StateActionType.DICE_NUMBER:
      return produce(mainState, (state: mainState) => {
        state.diceNumber = action.payload;
        state.gotiCutToken = false;
        state.gotiReachedWin = false;
      });

    case StateActionType.CHANCE:
      return produce(mainState, (state: mainState) => {
        state.chance = action.payload;
      });

    case StateActionType.POSITION_DATA:
      return produce(mainState, (state: mainState) => {
        state.positionData = action.payload;
      });

    case StateActionType.HAS_PLAYED:
      return produce(mainState, (state: mainState) => {
        state.played = true;
        state.canPlay = false;
      });

    case StateActionType.HAS_NOT_PLAYED:
      return produce(mainState, (state: mainState) => {
        state.played = false;
      });

    case StateActionType.CAN_PLAY:
      return produce(mainState, (state: mainState) => {
        state.canPlay = true;
      });

    case StateActionType.CAN_NOT_PLAY:
      return produce(mainState, (state: mainState) => {
        state.canPlay = false;
      });

    case StateActionType.GOTI_CUT_TOKEN:
      return produce(mainState, (state: mainState) => {
        state.gotiCutToken = true;
      });

    case StateActionType.GOTI_REACHED_WIN:
      return produce(mainState, (state: mainState) => {
        state.gotiReachedWin = true;
      });

    default:
      return mainState;
  }
};

export default MainReducer;
