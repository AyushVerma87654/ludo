import React, { FC } from "react";
import Repeat from "./Repeat";
import { hor, ver } from "./constants";
import HomeBase from "./HomeBase";
import DummyCenter from "./DummyCenter";
import DiceRolling from "./DiceRolling";
import { ConnectedProps, connect } from "react-redux";
// import { mainState } from "../redux/selectors";
import { AppState } from "../redux/reducer";

interface InterfaceProps extends ReduxProps {}

const Interface: FC<InterfaceProps> = ({}) => {
  // const [token, setToken] = React.useState(false);
  // useEffect(() => {
  //   if (token) {
  //     setNumber(num);
  //     setToken(false);
  //   }
  // }, [token]);
  const handleClick = () => console.log("win");

  // const { played, canPlay, diceNumber } = mainState;
  // console.log("canPlay", canPlay);
  // console.log("played", played);
  // console.log("diceNumber", diceNumber);
  // console.log("diceNumber", mainState);

  // const gotiMovement = (token: boolean) => {
  //   if (token == true) {
  //     const newState = {
  //       ...mainState,
  //       gotiMovement: gotiUnlock,
  //     };
  //     setMainState(newState);
  //   }
  // };
  // React.useEffect(() => {
  //   Object.values(position).map((item) => {
  //     if (number == 6) {
  //       const d = gotiUnlock(chanceOrder[chance], position);
  //       const newState = { ...mainState, position: d, diceNumber: number };
  //       setMainState(newState);
  //     }
  //   });
  // }, [number]);

  return (
    <div className="">
      <div className="flex">
        <HomeBase color="red" />
        <Repeat name={ver} direction="up" />
        <HomeBase color="green" />
      </div>
      <div className="flex">
        <Repeat name={hor} direction="left" />
        <DummyCenter onClick={() => handleClick()} />
        <Repeat name={hor} direction="right" />
      </div>
      <div className="flex">
        <HomeBase color="blue" />
        <Repeat name={ver} direction="down" />
        <HomeBase color="yellow" />
      </div>
      <DiceRolling />

      <div></div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  // mainState: mainState(state),
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Interface);
