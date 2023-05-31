import React from "react";
import Interface from "./Interface";
import { Provider } from "react-redux";
import store from "../redux/store";

function App() {
  return (
    <Provider store={store()}>
      <div className="relative flex items-center justify-center text-blue-500 min-h-screen max-h-screen">
        <Interface />
        {/* <Test /> */}
      </div>
    </Provider>
  );
}

export default App;
