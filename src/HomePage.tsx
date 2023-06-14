import React, { FC } from "react";
import { Link } from "react-router-dom";
import { mainState, setTotalPlayerAction } from "./redux/slices";
import { ConnectedProps, connect } from "react-redux";
import { positionDataSelector } from "./redux/selectors";
import { AppState } from "./redux/store";

interface HomePageProps extends ReduxProps {}

const HomePage: FC<HomePageProps> = ({ setTotalPlayers }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-7xl">Welcome to ludo website game</div>
      <div className="text-5xl py-4 my-4">Choose One of them</div>
      <div className="flex space-x-12 text-green-500 text-3xl mt-4">
        <Link to="/interface" onClick={() => setTotalPlayers(2)}>
          Two Players
        </Link>
        <Link to="/interface" onClick={() => setTotalPlayers(3)}>
          Three Players
        </Link>
        <Link to="/interface" onClick={() => setTotalPlayers(4)}>
          Four Players
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setTotalPlayers: setTotalPlayerAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(HomePage);
