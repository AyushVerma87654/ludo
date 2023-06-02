import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./reducer";

const store = configureStore({
  reducer: AppReducer,
  devTools: true,
});
export default store;
