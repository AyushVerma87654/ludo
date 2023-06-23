import React from "react";
import Interface from "./Interface";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Test from "./Test";
import { totalPlayersSelector } from "./redux/selectors";

function App() {
  const totalPlayers = useSelector(totalPlayersSelector);
  console.log("totalPlayers", totalPlayers);
  return (
    <div className="relative flex items-center justify-center text-blue-500 min-h-screen max-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {totalPlayers > 0 ? (
          <Route path="/interface" element={<Interface />} />
        ) : (
          <Route path="/interface" element={<HomePage />} />
        )}
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;

// if 2 or 3 goti of same color is placed below a goti of different color it can't move and if same number of goti are placed on it they all cut

// add team option
