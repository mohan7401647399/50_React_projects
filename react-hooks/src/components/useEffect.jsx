// //      1. Basic useEffect Example

// import React, { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`"Component  rendered or updated!!!" ${count}`);
//   });

//   return (
//     <>
//       <h1>UseEffect</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </>
//   );
// };

// export default UseEffect;

// //      2. useEffect with Cleanup

// import React, { useEffect, useState } from "react";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);
//     return () => clearInterval(timer);
//   });

//   return (
//     <div>
//       <p>Timer: {count}</p>
//     </div>
//   );
// }

// export default Timer;

// //     3. useEffect with Dependency Array

// import React, { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`"Component  rendered or updated!!!" ${count}`);
//   }, [count]);

//   return (
//     <>
//       <h1>UseEffect</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </>
//   );
// };

// export default UseEffect;

// //      4. Fetching Data with useEffect

// import React, { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
//       response.json().then((json) => {
//         setData(json);
//         setLoading(false);
//       })
//     );
//   }, []); // Empty array means this effect runs once after the component mounts

//   return (
//     <>
//       {loading ? (
//         <p>...loading</p>
//       ) : (
//         <ul>
//           {data.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default UseEffect;

//  5. useEffect for Event Listeners

// import React, { useEffect, useState } from "react";

// function WindowResize() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div>
//       <p>Current window width: {windowWidth}px</p>
//     </div>
//   );
// }

// export default WindowResize;
