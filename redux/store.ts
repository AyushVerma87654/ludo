import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./reducer";

const makeStore = () => {
  const store = configureStore({
    reducer: AppReducer,
    devTools: true,
  });
  return store;
};

export default makeStore;
