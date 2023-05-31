import { mainState } from "../../redux/reducer/reducer";
import { setMainStateType } from "../Button";
import { gotiMovement } from "./GotiMovement";

export const handleClick = (
  buttonId: string,
  mainState: mainState,
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
    gotiCutToken,
  } = mainState;
  const {
    canPlayChange,
    positionDataChange,
    canNotPlayChange,
    hasNotPlayedChange,
    hasPlayedChange,
    gotiCutTokenChange,
  } = setMainState;
  if (canPlay && !played) {
    let moveGoti = "";
    positionData[buttonId].item.map((item) => {
      if (item.charAt(0) === chanceOrder[chance].charAt(0).toUpperCase()) {
        moveGoti = item;
      }
      // console.log("item", item);
    });
    console.log("moveGoti", moveGoti);
    const newPositionData = gotiMovement(
      buttonId,
      chanceOrder[chance],
      positionData,
      diceNumber,
      chance,
      gotiCutTokenChange
    );

    let token: boolean = true;
    console.log("moveGoti", moveGoti);

    if (moveGoti !== "") {
      if (newPositionData[buttonId].item.length === 0) {
        token = false;
      }
      newPositionData[buttonId].item.map((item) => {
        if (item === moveGoti) {
          console.log("inside if");
          token = true;
          console.log("item", item);
        } else {
          token = false;
          console.log("else called");
        }
      });
    } else {
      token = true;
      console.log("outside called");
    }
    // console.log("token", token);

    positionDataChange(newPositionData);
    if (token) {
      hasNotPlayedChange();
      if (canPlay) {
        canPlayChange();
      } else {
        canNotPlayChange();
      }
    } else {
      hasPlayedChange();
    }
    // const newState = {
    //   ...mainState,
    //   positionData: newPositionData,
    //   played: token,
    //   canPlay: token ? false : canPlay,
    // };
    // setMainState(newState);
  }
};
