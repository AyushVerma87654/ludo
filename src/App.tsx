import React from "react";
import Interface from "./Interface";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="relative flex items-center justify-center text-blue-500 min-h-screen max-h-screen">
        <Interface />
        {/* <Test /> */}
      </div>
    </Provider>
  );
}

export default App;

// if all win goti remove it from chanceOrder
// add multi-player functionality
// if only one goti is opened, move it automatically if anything except 6 comes.
// if 2 or 3 goti of same color is placed below a goti of different color it can't move and if same number of goti are placed on it they all cut
// Make a win array
// Check for the error of duplicating goti
