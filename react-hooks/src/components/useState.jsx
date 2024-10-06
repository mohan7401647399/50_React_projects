// //  1.Management form input validation

// import { useState } from "react";

// import React, { useState } from "react";

// const UseState = () => {
//   const [value, setValue] = useState("");

//   const handleChange = (e) => {
//     setValue(e.target.value);
//     console.log(value);
//   };

//   return (
//     <>
//       <h2>React useState</h2>
//       <form>
//         <label>Name: </label>
//         <input type="text" value={value} onChange={handleChange} />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default UseState;

// //      2.Toggle visibility

// import React, { useState } from "react";

// const UseState = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <>
//       <h2>React useState</h2>
//       <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
//       {isVisible && <p>is Visible</p>}
//     </>
//   );
// };

// export default UseState;

// //      3.Dynamic styles

// import React, { useState } from "react";

// const UseState = () => {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <>
//       <h2>React useState</h2>
//       <button
//         className={isActive ? "active" : "inactive"}
//         onClick={() => setIsActive(!isActive)}
//       >
//         Click Me
//       </button>
//     </>
//   );
// };

// export default UseState;

// //      4.Counters

// import React, { useState } from "react";

// const UseState = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);

//   return (
//     <>
//       <h2>React useState</h2>
//       <button onClick={decrement}>-</button>
//       {count}
//       <button onClick={increment}>+</button>
//     </>
//   );
// };

// export default UseState;

// //      5.Managing array items

// import React, { useState } from "react";

// const UseState = () => {
//   const [items, setItems] = useState([]);

//   const itemList = () => {
//     setItems([...items, `Item ${items.length + 1}`]);
//   };

//   return (
//     <>
//       <h2>React useState</h2>
//       <button onClick={itemList}>Add Items</button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item} </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default UseState;

// //      6. Managing an Object State

// import React, { useState } from "react";

// const UseState = () => {
//   const [user, setUser] = useState({ name: "", age: "" });

//   const handleChangeName = (e) => {
//     setUser({ ...user, name: e.target.value });
//   };
//   const handleChangeAge = (e) => {
//     setUser({ ...user, age: e.target.value });
//   };

//   return (
//     <>
//       <h2>React useState</h2>
//       <input
//         type="text"
//         placeholder="name"
//         value={user.name}
//         onChange={handleChangeName}
//       />
//       <input
//         type="number"
//         placeholder="age"
//         value={user.age}
//         onChange={handleChangeAge}
//       />
//       <p>
//         Name : {user.name}
//         <br />
//         Age : {user.age}
//       </p>
//     </>
//   );
// };

// export default UseState;
