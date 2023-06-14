import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "./slices";

const store = configureStore({
  reducer: {
    mainState: MainReducer,
  },
  devTools: true,
});

export type AppState = ReturnType<typeof store.getState>;

export default store;
