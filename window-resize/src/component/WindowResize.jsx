import React, { useLayoutEffect, useState } from "react";

const WindowResize = () => {
  const [windowSize, setWindowSize] = useState({ height: 0, width: 0 });

  function handleSize() {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return windowSize;
};

export default WindowResize;
