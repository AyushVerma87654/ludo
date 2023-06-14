import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "./slices";

const store = configureStore({
  reducer: {
    main: MainReducer,
  },
  devTools: true,
});

export type AppState = ReturnType<typeof store.getState>;

export default store;
