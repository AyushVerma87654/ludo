import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

export type gotiCutTokenType =
  ActionCreatorWithoutPayload<"twoPlayer/gotiCutToken">;
export type gotiReachedWinChangeType =
  ActionCreatorWithoutPayload<"twoPlayer/gotiReachedWinToken">;

export type positionDataType = {
  [a: string]: {
    position: string;
    item: string[];
  };
};
