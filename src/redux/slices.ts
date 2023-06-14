import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { canPlayFunction } from "./../utility/CanPlay";
import { positionDataType } from "./../models/MainState";
import { chanceOrder2, data2 } from "./../data/data2";
import { chanceOrder3, data3 } from "./../data/data3";
import { chanceOrder4, data4 } from "./../data/data4";

export type mainState = {
  chance: number;
  chanceOrder: { [a: number]: string };
  positionData: positionDataType;
  diceNumber: number;
  played: boolean;
  canPlay: boolean;
  gotiCutToken: boolean;
  gotiReachedWinToken: boolean;
  totalPlayers: number;
};

const initialState: mainState = {
  chance: -1,
  chanceOrder: {},
  positionData: {},
  diceNumber: 3,
  played: false,
  canPlay: false,
  gotiCutToken: false,
  gotiReachedWinToken: false,
  totalPlayers: 0,
};

const stateSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    diceRolling,
    chance,
    canPlay,
    positionDataChange,
    played,
    gotiCutToken,
    gotiReachedWinToken,
    positionDataFilter,
    playerWin,
    shortCut,
    setTotalPlayer,
  },
});

const { actions, reducer: MainReducer } = stateSlice;

export const {
  diceRolling: diceRollingAction,
  chance: chanceAction,
  canPlay: canPlayAction,
  positionDataChange: positionDataChangeAction,
  played: playedAction,
  gotiCutToken: gotiCutTokenAction,
  gotiReachedWinToken: gotiReachedWinTokenAction,
  positionDataFilter: positionDataFilterAction,
  playerWin: playerWinAction,
  shortCut: shortcutAction,
  setTotalPlayer: setTotalPlayerAction,
} = actions;

export default MainReducer;

function diceRolling(state: mainState) {
  let newDiceNumber = 0;
  while (newDiceNumber === 0) {
    newDiceNumber = Math.floor(Math.random() * 7);
  }
  state.diceNumber = newDiceNumber;
  state.gotiCutToken = false;
  state.gotiReachedWinToken = false;
  state.played = false;
}

function chance(state: mainState) {
  if (
    state.diceNumber === 6 ||
    state.gotiCutToken ||
    state.gotiReachedWinToken
  ) {
    if (state.chance == -1) state.chance = 0;
  } else if (state.chance == state.totalPlayers - 1) state.chance = 0;
  else state.chance = state.chance + 1;
}

function canPlay(state: mainState, action: PayloadAction<boolean | null>) {
  if (action.payload === null) {
    if (state.diceNumber == 6) {
      let counter = 0;
      const gotiChance = state.chanceOrder[state.chance]
        .charAt(0)
        .toUpperCase();
      for (let i = 1; i < 6; i++) {
        const position = "C" + gotiChance + i;
        if (state.positionData[position].item.length !== 0) {
          state.positionData[position].item.map((item) => {
            if (item.charAt(0) === gotiChance) {
              counter += 1;
            }
          });
        }
      }
      if (state.positionData["win"].item.length !== 0) {
        state.positionData["win"].item.map((item) => {
          if (item.charAt(0) === gotiChance) {
            counter += 1;
          }
        });
      }
      if (counter === 4) {
        state.canPlay = false;
      } else {
        state.canPlay = true;
      }
    } else {
      console.log("diceNumber", state.diceNumber);
      const token = canPlayFunction(
        state.chanceOrder[state.chance],
        state.positionData,
        state.diceNumber
      );
      console.log("token", token);
      state.canPlay = state.chance !== -1 && token;
    }
  } else {
    state.canPlay = action.payload;
  }
}

function positionDataChange(
  state: mainState,
  action: PayloadAction<positionDataType>
) {
  state.positionData = action.payload;
}

function played(state: mainState, action: PayloadAction<boolean>) {
  state.played = action.payload;
  if (state.played) state.canPlay = false;
}

function gotiCutToken(state: mainState) {
  state.gotiCutToken = true;
}

function gotiReachedWinToken(state: mainState) {
  state.gotiReachedWinToken = true;
}

function positionDataFilter(
  state: mainState,
  action: PayloadAction<{
    positionData: positionDataType;
    chanceColor: string;
  }>
) {
  let { positionData: newPositionData, chanceColor } = action.payload;
  Object.values(newPositionData).map((item, index) => {
    let newArray = [...item.item];
    if (item.item.length !== 0 && item.item.length !== 1) {
      const newChanceColor = chanceColor.charAt(0).toUpperCase();
      newArray.map((item, index) => {
        if (item.charAt(0) === newChanceColor && index !== 0) {
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
}

function playerWin(
  state: mainState,
  action: PayloadAction<{ color: string; index: number }>
) {
  let temporaryChanceOrder = { ...state.chanceOrder };
  if (temporaryChanceOrder[action.payload.index] === action.payload.color) {
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

  if (
    Object.keys(newChanceOrder!).length !==
    Object.keys(state.chanceOrder).length
  ) {
    state.totalPlayers = state.totalPlayers - 1;
    state.gotiReachedWinToken = false;
  }
  state.chanceOrder = newChanceOrder!;
}

function shortCut(state: mainState) {
  state.diceNumber = 6;
  state.gotiCutToken = false;
  state.gotiReachedWinToken = false;
  state.played = false;
}

function setTotalPlayer(state: mainState, action: PayloadAction<number>) {
  state.totalPlayers = action.payload;
  state.chance = -1;
  if (state.totalPlayers === 2) {
    state.chanceOrder = chanceOrder2;
    state.positionData = data2;
  } else if (state.totalPlayers === 3) {
    state.chanceOrder = chanceOrder3;
    state.positionData = data3;
  } else if (state.totalPlayers === 4) {
    state.chanceOrder = chanceOrder4;
    state.positionData = data4;
  }
}
