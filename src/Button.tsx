import React, { FC, useContext } from "react";
import { GiMoebiusStar } from "react-icons/gi";
import { BsFillStarFill } from "react-icons/bs";
import { data } from "./data";
import GotiDisplay from "./GotiDisplay";
import { StateContext } from "./App";

interface ButtonProps {
  index: number;
  middle: number;
  name: string;
  direction: String;
}

const Button: FC<ButtonProps> = ({ index, name, middle, direction }) => {
  const { mainState, setMainState } = useContext(StateContext);
  const { chance, chanceOrder, position } = mainState;
  // const stone: string = data[buttonId].item?.charAt(0);
  // // console.log("stone", stone);
  // if (stone == "Y") {
  //   gotiBgColor = "bg-yellow-500";
  // } else if (stone == "B") {
  //   gotiBgColor = "bg-blue-500";
  // } else if (stone == "G") {
  //   gotiBgColor = "bg-green-500";
  // } else if (stone == "R") {
  //   gotiBgColor = "bg-red-500";
  // }
  let gotiBgColor = "";
  let i: number;
  for (let i = 0; i < 52; i++) {
    const str = position[JSON.stringify(i)].item;
    if (str !== "") {
      console.log("position[JSON.stringify(i)]", position[JSON.stringify(i)]);
      const color: string = str?.charAt(0);
      if (color == "Y") {
        gotiBgColor = "bg-yellow-500";
      } else if (color == "B") {
        gotiBgColor = "bg-blue-500";
      } else if (color == "G") {
        gotiBgColor = "bg-green-500";
      } else if (color == "R") {
        gotiBgColor = "bg-red-500";
      }
    }
  }

  // const [position, setPosition] = React.useState(data);
  // console.log("position", position);
  let bgColor = "";
  const handleClick = (id: string) => console.log("id", id);
  let borderHorizontal = "border-r-transparent ";
  let buttonId = 0;
  let star1 = { red: false, blue: false, green: false, yellow: false };
  let star2 = { red: false, blue: false, green: false, yellow: false };
  let bgHorizontal = "";
  let bgVertical = "";
  let str = "";
  let borderVertical = "border-b-transparent ";
  if (name == "horizontal") {
    if (direction == "left") {
      if (middle == 2) {
        buttonId = 10 - index;
      } else if (middle == 1 && index == 0) {
        buttonId = 11;
      } else if (middle == 1 && index !== 0) {
        str = "R" + index;
      } else if (middle == 0) {
        buttonId = 12 + index;
      }
    } else if (direction == "right") {
      if (middle == 2) {
        buttonId = 43 - index;
      } else if (middle == 1 && index == 5) {
        buttonId = 37;
      } else if (middle == 1 && index !== 5) {
        str = "Y" + (5 - index);
      } else if (middle == 0) {
        buttonId = 31 + index;
      }
    }
    if (index == 5) {
      borderHorizontal = "";
    }
    if (middle == 1) {
      borderHorizontal += "border-t-transparent border-b-transparent";
    }
    if (
      (direction == "left" && middle == 2 && index == 2) ||
      (direction == "left" && middle == 1 && index !== 0) ||
      (direction == "left" && middle == 0 && index == 1)
    ) {
      bgHorizontal = "bg-red-500";
      if (middle == 2 && index == 2) {
        star1.red = true;
      } else if (middle == 0 && index == 1) {
        star2.red = true;
      }
    } else if (
      (direction == "right" && middle == 0 && index == 3) ||
      (direction == "right" && middle == 1 && index !== 5) ||
      (direction == "right" && middle == 2 && index == 4)
    ) {
      bgHorizontal = "bg-yellow-500";
      if (middle == 0 && index == 3) {
        star1.yellow = true;
      } else if (middle == 2 && index == 4) {
        star2.yellow = true;
      }
    }
    borderVertical = "";
  } else if (name == "vertical") {
    if (direction == "up") {
      if (middle == 0) {
        buttonId = 23 - index;
      } else if (middle == 1 && index == 0) {
        buttonId = 24;
      } else if (middle == 1 && index !== 0) {
        str = "G" + index;
      } else if (middle == 2) {
        buttonId = 25 + index;
      }
    } else if (direction == "down") {
      if (middle == 0 && index == 5) {
        buttonId = 51;
      } else if (middle == 1 && index == 5) {
        buttonId = 50;
      } else if (middle == 2) {
        buttonId = 44 + index;
      } else if (middle == 0 && index !== 5) {
        buttonId = 4 - index;
      } else if (middle == 1 && index !== 5) {
        str = "B" + (5 - index);
      }
    }
    if (index == 5) {
      borderVertical = "";
    }
    if (middle == 1) {
      borderVertical += "border-r-transparent border-l-transparent";
    }
    if (
      (direction == "up" && middle == 0 && index == 2) ||
      (direction == "up" && middle == 1 && index !== 0) ||
      (direction == "up" && middle == 2 && index == 1)
    ) {
      bgHorizontal = "bg-green-500";
      if (middle == 0 && index == 2) {
        star1.green = true;
      } else if (middle == 2 && index == 1) {
        star2.green = true;
      }
    } else if (
      (direction == "down" && middle == 2 && index == 3) ||
      (direction == "down" && middle == 1 && index !== 5) ||
      (direction == "down" && middle == 0 && index == 4)
    ) {
      bgHorizontal = "bg-blue-500";
      if (middle == 2 && index == 3) {
        star1.blue = true;
      } else if (middle == 0 && index == 4) {
        star2.blue = true;
      }
    }
    borderHorizontal = "";
  }
  // console.log("str", str);
  // if (data[JSON.stringify(buttonId)].item != "") {
  //   console.log(
  //     "data[JSON.stringify(buttonId)].item",
  //     data[JSON.stringify(buttonId)].item
  //   );
  // }
  // console.log("data.buttonId", data[JSON.stringify(buttonId)]);
  return (
    <div
      className={`flex items-center justify-center border border-black w-10 h-10 ${borderHorizontal} ${borderVertical} ${bgHorizontal}  ${bgVertical}`}
      id={JSON.stringify(buttonId)}
      onClick={() => handleClick(str != "" ? str : JSON.stringify(buttonId))}
    >
      {(star1.red || star1.yellow || star1.green || star1.blue) && (
        <GiMoebiusStar className="rounded-full flex items-center justify-center h-full w-full text-black" />
      )}
      {(star2.red || star2.yellow || star2.green || star2.blue) && (
        <BsFillStarFill className="rounded-full flex items-center justify-center h-full w-full text-black" />
      )}
      <div className="absolute mr-6 mb-6">
        {Object.values(position).map((item) => {
          console.log("item", item.item);
          return (
            <div>
              {item.item ? (
                <>
                  <GotiDisplay bgColor={gotiBgColor} item={item} />
                </>
              ) : (
                <div>{console.log("dcbjsbkdv b skjdbv kjds") || ""}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Button;

{
  /* <div className={`${Style.triangle} ${Style.triangleTopLeft}`}></div>
          <div className={`${Style.triangle} ${Style.triangleTopRight}`}></div>
          <div className={`${Style.triangle} ${Style.triangleBottomLeft}`}></div>
          <div className={`${Style.triangle} ${Style.triangleBottomRight}`}></div> */
}
{
  /* <div className="absolute flex items-center justify-center border border-white bg-white rounded-full w-6 h-6">
        <div className="flex items-center justify-center border border-white bg-gray-300 rounded-full w-5 h-5">
          <div className="border border-black bg-black rounded-full w-1.5 h-1.5"></div>
        </div>
      </div> */
}
