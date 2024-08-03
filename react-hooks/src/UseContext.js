//              Parent Using Locate State



// import React, { useState } from 'react'

// export default function Parentusinglocalstate() {
//   const [user] = useState('React')
//   return (
//     <>
//     <h1>Parentusinglocalstate</h1>
//      <Component1 user={user}/>
//     </>
//   )
// }

// function Component1({user}) {
//     return (
//         <>
//            <h3>Component 1</h3>
//            <Component2 user={user}/>
//         </>
//     )
// }

// function Component2({user}) {
//     return (
//         <>
//            <h3>Component 2</h3>
//            <Component3 user={user}/>
//         </>
//     )
// }

// function Component3({user}) {
//     return (
//         <>
//            <h3>Component 3</h3>
//            <Component4 user={user}/>

//         </>
//     )
// }

// function Component4({user}) {
//     return (
//         <>
//            <h3>Component 4</h3>
//            <Component5 user={user}/>
//         </>
//     )
// }

// function Component5({user}) {
//     return (
//         <>
//            <h3>Component 5</h3>
//            <h1>{`user is ${user}`}</h1>
//         </>
//     )
// }



//      //              Parent Using Context
                 

import React, { createContext,useContext,useState } from "react";

const UserContext = createContext();

export default function Parentuseingcontext() {
  
    const [user] = useState("React");

  return (
    <UserContext.Provider value={user}>
      <h1>Parentuseingcontext</h1>
      <Component1 />
    </UserContext.Provider>
  );
}

function Component1() {
  return (
    <>
      <h3>Component 1</h3>
      <Component2 />
    </>
  );
}

function Component2() {
  return (
    <>
      <h3>Component 2</h3>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h3>Component 3</h3>
      <Component4  />
    </>
  );
}

function Component4() {
    const user = useContext(UserContext)
    return (
        <>
      <h3>Component 4</h3>
      <h1>{`user is ${user}`}</h1>
      <Component5/>
    </>
  );
}

function Component5() {

  const user = useContext(UserContext)
  return (
    <>
      <h3>Component 5</h3>
      <h1>{`user is ${user}`}</h1>
    </>
  );
}