import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

export type gotiCutTokenType = ActionCreatorWithoutPayload<"main/gotiCutToken">;
export type gotiReachedWinChangeType =
  ActionCreatorWithoutPayload<"main/gotiReachedWinToken">;

export type positionDataType = {
  [a: string]: {
    position: string;
    item: string[];
  };
};
