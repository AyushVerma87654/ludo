import { combineReducers } from "redux";
import MainReducer from "./reducer";

const AppReducer = combineReducers({
  mainState: MainReducer,
});

export type AppState = ReturnType<typeof AppReducer>;

export default AppReducer;
