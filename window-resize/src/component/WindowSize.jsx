import React from "react";
import WindowResize from "./WindowResize";

const WindowSize = () => {
  const windowSize = WindowResize();

  const { height, width } = windowSize;

  return (
    <div>
      <h1>The window resize Hook</h1>
      <p>height : {height} </p>
      <p>width : {width} </p>
    </div>
  );
};

export default WindowSize;
