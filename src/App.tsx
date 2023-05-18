import React from "react";
import Interface from "./Interface";
import Test from "./Test";
import { data, chanceOrder } from "./data";
import { mainStateType, ContextType } from "./models/MainState";

export const StateContext = React.createContext<ContextType>({
  mainState: { chance: -1, chanceOrder: {}, position: {} },
  setMainState: () => {},
});

function App() {
  const [mainState, setMainState] = React.useState<mainStateType>({
    chance: -1,
    chanceOrder,
    position: data,
  });

  return (
    <StateContext.Provider value={{ mainState, setMainState }}>
      <div className="relative flex items-center justify-center text-blue-500 min-h-screen max-h-screen">
        <Interface />
        {/* <Test /> */}
      </div>
    </StateContext.Provider>
  );
}

export default App;
