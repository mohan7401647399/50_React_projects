//  Here are some examples of how to use useLayoutEffect in React. The key difference between useEffect and useLayoutEffect is that the latter fires synchronously after all DOM mutations but before the browser repaints. This makes useLayoutEffect useful when you need to perform DOM measurements or updates before the browser has had a chance to visually update.

// import React, { useLayoutEffect, useRef, useState } from "react";

// function LayoutEffectExample() {
//   const inputRef = useRef(null);
//   const [inputWidth, setInputWidth] = useState(0);

//   useLayoutEffect(() => {
//     // Runs before the browser repaints
//     setInputWidth(inputRef.current.offsetWidth);
//     console.log("Input width:", inputRef.current.offsetWidth);
//   }, []); // Empty dependency array ensures it only runs on mount

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Type here" />
//       <p>Input width is: {inputWidth}px</p>
//     </div>
//   );
// }

// export default LayoutEffectExample;

//          2. Measuring DOM Size Before Paint

// import React, { useLayoutEffect, useRef, useState } from "react";

// function MeasureBox() {
//   const boxRef = useRef(null);
//   const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

//   useLayoutEffect(() => {
//     // Measure the DOM element's size before the paint
//     const { offsetWidth, offsetHeight } = boxRef.current;
//     setBoxSize({ width: offsetWidth, height: offsetHeight });
//   }, []);

//   return (
//     <div>
//       <div
//         ref={boxRef}
//         style={{
//           width: "200px",
//           height: "100px",
//           backgroundColor: "lightblue",
//         }}
//       >
//         This is a box
//       </div>
//       <p>
//         Box width: {boxSize.width}px, height: {boxSize.height}px
//       </p>
//     </div>
//   );
// }

// export default MeasureBox;

// //      3. useLayoutEffect with Animations

// import React, { useLayoutEffect, useRef, useState } from "react";

// function AnimatedBox() {
//   const boxRef = useRef(null);
//   const [isToggled, setIsToggled] = useState(false);

//   useLayoutEffect(() => {
//     const box = boxRef.current;
//     box.style.transform = isToggled ? "translateX(300px)" : "translateX(0px)";
//   }, [isToggled]); // Fires every time `isToggled` changes

//   return (
//     <>
//       <div
//         ref={boxRef}
//         style={{
//           width: "100px",
//           height: "100px",
//           backgroundColor: "tomato",
//           transition: "transform 0.5s ease",
//         }}
//       />
//       <button onClick={() => setIsToggled(!isToggled)}>
//         {isToggled ? "Move Left" : "Move Right"}
//       </button>
//     </>
//   );
// }

// export default AnimatedBox;

// //  4. Adjusting Scroll Position Before Paint

// import React, { useLayoutEffect, useRef } from "react";

// function ScrollToBottom() {
//   const containerRef = useRef(null);

//   useLayoutEffect(() => {
//     const container = containerRef.current;
//     // Set scroll to bottom before paint
//     container.scrollTop = container.scrollHeight;
//   }, []); // Empty array ensures this only happens on mount

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         height: "100px",
//         width: "300px",
//         overflowY: "scroll",
//         border: "1px solid black",
//       }}
//     >
//       <div style={{ height: "100px" }}>
//         <p>Scroll me!</p>
//         <p>Some more content...</p>
//         <p>End of content</p>
//       </div>
//     </div>
//   );
// }

// export default ScrollToBottom;

//      5. Synchronous DOM Measurement in a Form

import React, { useLayoutEffect, useRef, useState } from "react";

function FormHeightTracker() {
  const formRef = useRef(null);
  const [formHeight, setFormHeight] = useState(0);

  useLayoutEffect(() => {
    setFormHeight(formRef.current.offsetHeight);
  }, []); // This ensures the effect runs after the form is mounted but before paint

  return (
    <div>
      <form
        ref={formRef}
        style={{ border: "1px solid black", padding: "20px" }}
      >
        <label>Name: </label>
        <input type="text" />
        <br />
        <label>Email: </label>
        <input type="email" />
      </form>
      <p>Form height: {formHeight}px</p>
    </div>
  );
}

export default FormHeightTracker;
