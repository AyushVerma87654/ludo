import React, { useContext } from "react";
import { StateContext } from "./App";

const withUser =
  (IncomingComponent: React.ComponentType<any>) =>
  ({ ...props }) => {
    const data = useContext(StateContext);
    return <IncomingComponent {...props} {...data} />;
  };
export default withUser;
