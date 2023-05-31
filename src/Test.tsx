import React, { FC, useEffect } from "react";
import withUser from "./withUser";
import { contextType } from "./models/MainState";

interface TestProps extends contextType {}

const Test: FC<TestProps> = ({ mainState, setMainState }) => {
  // const { mainState, setMainState } = data;
  console.log("mainState", mainState);
  const ages = [32, 33, 16, 40];

  const ag = ages.every((ages) => {
    return ages > 18;
  });

  console.log("ag", ag);

  // const age = ages.filter((age) => {
  //   return age >= 18;
  // });

  console.log("ages", ages);
  // console.log("age", age);

  return (
    <div>
      {ages.every((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default withUser(Test);
