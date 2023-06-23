import { useDispatch } from "react-redux";
import { mainStateType, setMainStateType } from "../Button";
import { gotiMovement } from "./GotiMovement";

export const handleClick = (
  buttonId: string,
  mainState: mainStateType,
  setMainState: setMainStateType
) => {
  console.log("buttonId", buttonId);

  const {
    chance,
    chanceOrder,
    positionData,
    diceNumber,
    played,
    canPlay,
    autoPlayToken,
  } = mainState;
  console.log("setMainState", setMainState);
  const {
    canPlayChange,
    positionDataChange,
    playedChange,
    gotiCutTokenChange,
    gotiReachedWinChange,
    positionDataFilter,
  } = setMainState;
  let newPositionData = { ...positionData };
  let token = true;
  if ((canPlay || autoPlayToken) && !played) {
    let moveGoti = "";
    positionData[buttonId].item.map((item) => {
      if (item.charAt(0) === chanceOrder[chance].charAt(0).toUpperCase()) {
        moveGoti = item;
      }
    });
    newPositionData = gotiMovement(
      buttonId,
      chanceOrder[chance],
      positionData,
      diceNumber,
      gotiCutTokenChange,
      gotiReachedWinChange
    );

    if (moveGoti !== "") {
      if (newPositionData[buttonId].item.length === 0) {
        token = false;
      }
      newPositionData[buttonId].item.map((item) => {
        if (item === moveGoti) {
          token = true;
        } else {
          token = false;
        }
      });
    } else {
      token = true;
    }

    positionDataChange(newPositionData);
    positionDataFilter({
      positionData: newPositionData,
      chanceColor: chanceOrder[chance],
    });
    playedChange(!token);
    canPlayChange(token ? (canPlay ? true : false) : false);
  }
};
