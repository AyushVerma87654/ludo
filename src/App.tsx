import React from "react";
import Interface from "./Interface";
import Test from "./Test";
import { data, chanceOrder } from "./data";
// import { mainAppState, mainStateType } from "./models/MainState";
import { gotiMovement } from "./utility/GotiMovement";
import { Provider } from "react-redux";
import store from "../redux/store";

const initialState = {
  chance: -1,
  chanceOrder,
  positionData: data,
  diceNumber: 3,
  played: false,
  canPlay: false,
  gotiCutToken: false,
};

// export const StateContext = React.createContext<mainAppState>({
//   mainState: initialState,
//   setMainState: () => {},
// });

function App() {
  // const [mainState, setMainState] = React.useState<mainStateType>(initialState);

  return (
    <Provider store={store()}>
      {/* <StateContext.Provider value={{ mainState, setMainState }}> */}
      <div className="relative flex items-center justify-center text-blue-500 min-h-screen max-h-screen">
        <Interface />
        {/* <Test /> */}
      </div>
      {/* </StateContext.Provider> */}
    </Provider>
  );
}

export default App;
