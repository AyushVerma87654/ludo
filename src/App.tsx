import React from "react";
import Interface from "./Interface";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Test from "./Test";
import { totalPlayersSelector } from "./redux/selectors";

function App() {
  const totalPlayers = useSelector(totalPlayersSelector);
  return (
    <div className="relative flex items-center justify-center text-blue-500 max-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/interface"
          element={totalPlayers > 0 ? <Interface /> : <Navigate to="/" />}
        />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;

// if 2 or 3 goti of same color is placed below a goti of different color it can't move and if same number of goti are placed on it they all cut

// add team option
