import { mainStateType, setMainStateType } from "../Button";
import { gotiMovement } from "./GotiMovement";

export const handleClick = (
  buttonId: string,
  mainState: mainStateType,
  setMainState: setMainStateType
) => {
  console.log("buttonId", buttonId);

  const { chance, chanceOrder, positionData, diceNumber, played, canPlay } =
    mainState;
  const {
    canPlayChange,
    positionDataChange,
    playedChange,
    gotiCutTokenChange,
    gotiReachedWinChange,
    positionDataFilter,
  } = setMainState;
  if (canPlay && !played) {
    let moveGoti = "";
    positionData[buttonId].item.map((item) => {
      if (item.charAt(0) === chanceOrder[chance].charAt(0).toUpperCase()) {
        moveGoti = item;
      }
    });
    let newPositionData = gotiMovement(
      buttonId,
      chanceOrder[chance],
      positionData,
      diceNumber,
      gotiCutTokenChange,
      gotiReachedWinChange
    );

    let token: boolean = true;

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
