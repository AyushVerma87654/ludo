import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

export type gotiCutTokenType = () => {
  type: ActionCreatorWithoutPayload<"mainState/gotiCutToken">;
};

export type positionDataType = {
  [a: string]: {
    position: string;
    item: string[];
  };
};
