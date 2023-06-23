import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from "@reduxjs/toolkit";

export type gotiCutTokenType = ActionCreatorWithoutPayload<"main/gotiCutToken">;
export type gotiReachedWinChangeType =
  ActionCreatorWithoutPayload<"main/gotiReachedWinToken">;

export type positionDataType = {
  [a: string]: {
    position: string;
    item: string[];
  };
};

export type tempState = {
  canPlay: boolean;
  played: boolean;
  chance: number;
  chanceOrder: {
    [a: number]: string;
  };
  diceNumber: number;
  gotiCutToken: boolean;
  gotiReachedWinToken: boolean;
  autoPlayToken: boolean;
};
