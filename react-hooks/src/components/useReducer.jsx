//      1. Basic Counter Example

// import React, { useReducer } from "react";

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// function UseReducer() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//       <p>{state.count}</p>
//       <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//     </>
//   );
// }

// export default UseReducer;

// //      2. Complex State Object

// import React, { useReducer } from "react";

// const initialState = { name: "", age: "" };

// function reducer(state, action) {
//   switch (action.type) {
//     case "setName":
//       return { ...state, name: action.payload };
//     case "setAge":
//       return { ...state, age: action.payload };
//     default:
//       return state;
//   }
// }

// function UseReducer() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="name"
//         value={state.name}
//         onChange={(e) => dispatch({ type: "setName", payload: e.target.value })}
//       />
//       <p>{state.name}</p>
//       <input
//         type="number"
//         placeholder="age"
//         value={state.age}
//         onChange={(e) => dispatch({ type: "setAge", payload: e.target.value })}
//       />
//       <p>{state.age}</p>
//     </>
//   );
// }

// export default UseReducer;

// //      3. Fetch Data with useReducer

// import React, { useReducer, useEffect } from "react";

// const initialState = {
//   loading: true,
//   error: "",
//   data: null,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "fetchSuccess":
//       return { loading: false, error: "", data: action.payload };
//     case "fetchError":
//       return { loading: false, error: "Error fetching data", data: null };
//     default:
//       return state;
//   }
// }

// function DataFetcher() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({ type: "fetchSuccess", payload: data });
//       })
//       .catch(() => {
//         dispatch({ type: "fetchError" });
//       });
//   }, []);

//   return (
//     <div>
//       {state.loading ? (
//         <p>Loading...</p>
//       ) : state.error ? (
//         <p>{state.error}</p>
//       ) : (
//         <ul>
//           {state.data.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default DataFetcher;
