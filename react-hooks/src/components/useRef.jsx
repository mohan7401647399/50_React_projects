// //  1. Accessing DOM Elements

// import React, { useRef } from "react";

// const UseRef = () => {
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <>
//       <h1>React useRef</h1>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleFocus}>Focus</button>
//     </>
//   );
// };

// export default UseRef;

// //      2. Storing Mutable Values

// import React, { useState, useRef } from "react";

// function Timer() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(count); // Store mutable value

//   const handleStart = () => {
//     countRef.current = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);
//   };

//   const handleStop = () => {
//     clearInterval(countRef.current); // Access the interval ID stored in the ref
//   };

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </>
//   );
// }

// export default Timer;

// //      3. Tracking Previous State

// import React, { useState, useEffect, useRef } from "react";

// function PreviousStateExample() {
//   const [count, setCount] = useState(0);
//   const prevCountRef = useRef(count);

//   useEffect(() => {
//     prevCountRef.current = count; // Store the previous count after every render
//   });

//   const prevCount = prevCountRef.current;

//   return (
//     <div>
//       <p>Current count: {count}</p>
//       <p>Previous count: {prevCount}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default PreviousStateExample;

// //      4. Preserving Values Across Renders

// import React, { useState, useRef } from "react";

// function ClickTracker() {
//   const [clicks, setClicks] = useState(0);
//   const clickRef = useRef(0); // To track clicks without re-rendering

//   const handleClick = () => {
//     clickRef.current++;
//     setClicks(clicks + 1); // Re-render only when we want to update UI
//   };

//   return (
//     <div>
//       <p>Clicks (tracked by useRef): {clickRef.current}</p>
//       <p>Clicks (tracked by state): {clicks}</p>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default ClickTracker;

// //      5. Storing References to Multiple Elements

// import React, { useRef } from "react";

// function MultipleRefsExample() {
//   const inputRefs = useRef([]);

//   const focusInput = (index) => {
//     inputRefs.current[index].focus(); // Focus the specific input element
//   };

//   return (
//     <div>
//       <input ref={(el) => (inputRefs.current[0] = el)} placeholder="Input 1" />
//       <input ref={(el) => (inputRefs.current[1] = el)} placeholder="Input 2" />
//       <button onClick={() => focusInput(0)}>Focus Input 1</button>
//       <button onClick={() => focusInput(1)}>Focus Input 2</button>
//     </div>
//   );
// }

// export default MultipleRefsExample;
