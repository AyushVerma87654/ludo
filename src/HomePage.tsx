import React, { FC } from "react";
import { Link } from "react-router-dom";
import { mainState, setTotalPlayerAction } from "./redux/slices";
import { ConnectedProps, connect } from "react-redux";
import { positionDataSelector } from "./redux/selectors";
import { AppState } from "./redux/store";

interface HomePageProps extends ReduxProps {}

const HomePage: FC<HomePageProps> = ({ setTotalPlayers }) => {
  const [toggle, setToggle] = React.useState(0);
  console.log("toggle", toggle);
  return (
    <div className="flex flex-col items-center">
      <div className="text-7xl">Welcome to ludo website game</div>
      <div className="text-5xl py-4 my-4">Choose One of them</div>
      <div className="flex space-x-16 text-green-500 text-3xl mt-4">
        <div className="w-72">
          <div
            className="cursor-pointer text-center"
            onClick={() => setToggle(2)}
          >
            Two Players
          </div>
          <div className="h-24">
            {toggle == 2 && (
              <div>
                <Link
                  to="/interface"
                  className="flex justify-around my-10 mx-auto p-2 border border-black rounded-md bg-gray-300 w-48"
                  onClick={() => setTotalPlayers({ totalPlayers: 2, token: 1 })}
                >
                  <div className="bg-blue-500 rounded-full w-10 h-10"></div>
                  <div className="bg-green-500 rounded-full w-10 h-10"></div>
                </Link>
                <Link
                  to="/interface"
                  className="flex justify-around mt-10 mx-auto p-2 border border-black rounded-md bg-gray-300 w-48"
                  onClick={() => setTotalPlayers({ totalPlayers: 2, token: 2 })}
                >
                  <div className="bg-yellow-500 rounded-full w-10 h-10"></div>
                  <div className="bg-red-500 rounded-full w-10 h-10"></div>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="w-72">
          <div
            className="cursor-pointer text-center"
            onClick={() => setToggle(3)}
          >
            Three Players
          </div>
          <div className="h-24">
            {toggle == 3 && (
              <div>
                <Link
                  to="/interface"
                  className="flex justify-around my-10 mx-2 p-2 border border-black rounded-md bg-gray-300"
                  onClick={() => setTotalPlayers({ totalPlayers: 3, token: 1 })}
                >
                  <div className="bg-blue-500 rounded-full w-10 h-10"></div>
                  <div className="bg-green-500 rounded-full w-10 h-10"></div>
                  <div className="bg-red-500 rounded-full w-10 h-10"></div>
                </Link>
                <Link
                  to="/interface"
                  className="flex justify-around my-10 mx-2 p-2 border border-black rounded-md bg-gray-300"
                  onClick={() => setTotalPlayers({ totalPlayers: 3, token: 2 })}
                >
                  <div className="bg-green-500 rounded-full w-10 h-10"></div>
                  <div className="bg-red-500 rounded-full w-10 h-10"></div>
                  <div className="bg-yellow-500 rounded-full w-10 h-10"></div>
                </Link>
                <Link
                  to="/interface"
                  className="flex justify-around my-10 mx-2 p-2 border border-black rounded-md bg-gray-300"
                  onClick={() => setTotalPlayers({ totalPlayers: 3, token: 3 })}
                >
                  <div className="bg-blue-500 rounded-full w-10 h-10"></div>
                  <div className="bg-yellow-500 rounded-full w-10 h-10"></div>
                  <div className="bg-green-500 rounded-full w-10 h-10"></div>
                </Link>
              </div>
            )}
          </div>
        </div>
        <Link
          to="/interface"
          onClick={() => setTotalPlayers({ totalPlayers: 4, token: 0 })}
          className="w-72"
        >
          <div
            className="cursor-pointer text-center"
            onClick={() => setToggle(4)}
          >
            Four Players
          </div>
          <div className="h-36"></div>
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
