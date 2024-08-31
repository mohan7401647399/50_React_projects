import React, { useRef, useState } from "react";
import useHook from "./useHook";

const UseOutSideData = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useHook(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside to close this. It won't close if you click
            inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOutSideData;
