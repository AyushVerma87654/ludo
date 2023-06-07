import { produce } from "immer";
import { data, positionDataType } from "../../data";
import { chanceOrder } from "../../data";
import { StateActionType } from "../action/constants";
import { Action } from "../action/index";
import { canPlayFunction } from "../../utility/CanPlay";

export type mainState = {
  chance: number;
  chanceOrder: { [a: number]: string };
  positionData: positionDataType;
  diceNumber: number;
  played: boolean;
  canPlay: boolean;
  gotiCutToken: boolean;
  gotiReachedWinToken: boolean;
};

const initialState: mainState = {
  chance: -1,
  chanceOrder,
  positionData: data,
  diceNumber: 3,
  played: false,
  canPlay: false,
  gotiCutToken: false,
  gotiReachedWinToken: false,
};

const MainReducer = (mainState: mainState = initialState, action: Action) => {
  switch (action.type) {
    case StateActionType.DICE_NUMBER:
      return produce(mainState, (state: mainState) => {
        let newDiceNumber = 0;
        while (newDiceNumber === 0) {
          newDiceNumber = Math.floor(Math.random() * 7);
        }
        state.diceNumber = newDiceNumber;
        state.gotiCutToken = false;
        state.gotiReachedWinToken = false;
        state.played = false;
      });

    case StateActionType.CHANCE:
      return produce(mainState, (state: mainState) => {
        if (
          state.diceNumber === 6 ||
          state.gotiCutToken ||
          state.gotiReachedWinToken
        ) {
          if (state.chance == -1) state.chance = 0;
        } else if (state.chance == 3) state.chance = 0;
        else state.chance = state.chance + 1;
      });

    case StateActionType.CAN_PLAY:
      return produce(mainState, (state: mainState) => {
        if (action.payload === null) {
          if (state.diceNumber == 6) {
            state.canPlay = true;
          } else {
            console.log("diceNumber", state.diceNumber);
            const token = canPlayFunction(
              state.chanceOrder[state.chance],
              state.positionData,
              state.diceNumber
            );
            state.canPlay = state.chance !== -1 && token;
          }
        } else {
          state.canPlay = action.payload;
        }
      });

    case StateActionType.POSITION_DATA:
      return produce(mainState, (state: mainState) => {
        state.positionData = action.payload;
      });

    case StateActionType.PLAYED:
      return produce(mainState, (state: mainState) => {
        state.played = action.payload;
        if (state.played) state.canPlay = false;
      });

    case StateActionType.GOTI_CUT_TOKEN:
      return produce(mainState, (state: mainState) => {
        state.gotiCutToken = true;
      });

    case StateActionType.GOTI_REACHED_WIN:
      return produce(mainState, (state: mainState) => {
        state.gotiReachedWinToken = true;
      });

    case StateActionType.POSITION_DATA_FILTER:
      return produce(mainState, (state: mainState) => {
        let newPositionData = action.payload as positionDataType;
        Object.values(newPositionData).map((item, index) => {
          let newArray = [...item.item];
          if (item.item.length !== 0 && item.item.length !== 1) {
            const chanceColor = state.chanceOrder[state.chance]
              .charAt(0)
              .toUpperCase();
            newArray.map((item, index) => {
              if (item.charAt(0) === chanceColor && index !== 0) {
                const temp = newArray[0];
                newArray[0] = newArray[index];
                newArray[index] = temp;
              }
            });
          }
          if (newPositionData[item.position].item.length !== 0) {
            newPositionData = {
              ...newPositionData,
              [item.position]: { position: item.position, item: newArray },
            };
          }
        });
        state.positionData = newPositionData;
      });

    case StateActionType.PLAYER_WIN:
      return produce(mainState, (state: mainState) => {
        let temporaryChanceOrder = { ...state.chanceOrder };
        if (
          temporaryChanceOrder[action.payload.index] === action.payload.color
        ) {
          delete temporaryChanceOrder[action.payload.index];
        }
        const newArray = Object.values(temporaryChanceOrder);
        let newChanceOrder: { [a: number]: string };
        for (let i = 0; i < newArray.length; i++) {
          if (i === 0) {
            newChanceOrder = {
              [i]: newArray[i],
            };
          }
          newChanceOrder = {
            ...newChanceOrder!,
            [i]: newArray[i],
          };
        }
        state.chanceOrder = newChanceOrder!;
      });

    case StateActionType.SHORTCUT:
      return produce(mainState, (state: mainState) => {
        state.diceNumber = 6;
        state.gotiCutToken = false;
        state.gotiReachedWinToken = false;
        state.played = false;
      });

    default:
      return mainState;
  }
};

export default MainReducer;
