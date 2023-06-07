import { mainState } from "../redux/reducer/reducer";
import { setMainStateType } from "../Button";
import { gotiMovement } from "./GotiMovement";

export const handleClick = (
  buttonId: string,
  mainState: mainState,
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
    console.log("diceNumber", diceNumber);
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
    positionDataFilter(newPositionData);
    playedChange(!token);
    canPlayChange(token ? (canPlay ? true : false) : false);
  }
};
