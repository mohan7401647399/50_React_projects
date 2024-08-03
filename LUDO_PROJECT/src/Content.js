// import React from 'react';

// const Content = () => {
//     const handleNameChange = () => {
//         const names = ['React','Redux','components'];
//         const int = Math.floor(Math.random()*3);
//         return names[int]
//       }
//       const handleClick = (name) => {
//         console.log(`Thanks for Click ${name}`)
//       }

//   return (
//     <main>
//       <p>Lets's {handleNameChange()} Learing</p>
//       <button onClick={ () => handleClick('mohan')} >Click</button>
//     </main>
//   );
// }

// export default Content;


// import React from 'react';

// const Content = () => {
//     const handleNameChange = () => {
//         const names = ['React','Redux','components'];
//         const int = Math.floor(Math.random()*3);
//         return names[int]
//       }
//       const handleClick2 = (name) => {
//         console.log(`Thanks for Click ${name}`)
//       }
//       const handleClick = (e) => {
//         console.log(e.target.innerText)
//       }

//   return (
//     <main>
//       <p>Lets's {handleNameChange()} Learing</p>
//       <button onClick={ (e) => handleClick(e)} >Click</button>
//     </main>
//   );
// }

// export default Content;


//            USE STATE

// import React from 'react';
// import { useState } from 'react';

// const Content = () => {
//     const handleNameChange = () => {
//         const names = ['React','Redux','components'];
//         const int = Math.floor(Math.random()*3);
//         return names[int]
//       }

//       const [count, setCount] = useState(99);
//       function incrementFunction() {
//         setCount( prevCount => prevCount + 1)
//       }
//       function decreaseFunction() {
//         setCount(prevCount => prevCount - 1)
//       }
//   return (
//     <main>
//       <p>Lets's Learing</p>
//       <button>Click</button>
//       <button onClick={decreaseFunction} >-</button>
//       <span>{count}</span>
//       <button onClick={incrementFunction} >+</button>
//     </main>
//   );
// }

// export default Content;


// import React from 'react';
// import { useState } from 'react';

// const Content = () => {
//     const handleNameChange = () => {
//         const names = ['React','Redux','components'];
//         const int = Math.floor(Math.random()*3);
//         return names[int]
//       }

//       function namee() {
//         return console.log("Mohan")
//       }

//       const [count, setCount] = useState(99);
//       const [name,setName] = useState(() => namee());
//       function incrementFunction() {
//         setCount( prevCount => prevCount + 1)
//       }

//       function decreaseFunction() {
//         setCount(prevCount => prevCount - 1)
//       }

//   return (
//     <main>
//       <p>Lets's Learing</p>
//       <button>Click</button>
//       <button onClick={decreaseFunction} >-</button>
//       <span>{count}</span>
//       <button onClick={incrementFunction} >+</button>
//     </main>
//   );
// }

// export default Content;


// import React from 'react';
// import { useState } from 'react';

// const Content = () => {
//     const[name, setName] = useState()
//     const handleNameChange = () => {
//         const names = ['React','Redux','components'];
//         const int = Math.floor(Math.random()*3);
//         setName(names[int])
//       }

//   return (
//     <main>
//       <p>Lets's {name} Learing</p>
//       <button onClick={handleNameChange} >Click</button>
//     </main>
//   )
// }

// export default Content;



//                LIST $ KEYS 
// import React from 'react';
// import { useState } from 'react';
// import { FaTrashAlt } from "react-icons/fa";


// const Content = () => {
//   const [items, setItems] = useState(
//     [
//       {
//         id:1,
//         checked: true,
//         item: "Practice Coding"
//       },
//       {
//         id:2,
//         checked: false,
//         item: "Watching WWE"
//       },
//       {
//         id:3,
//         checked: false,
//         item: "Read about AI"
//       }
//     ]
//   );
//   return (
//     <main>
//       <ul>
//         {items.map((item) => (
//           <li className='item' key={item.id}>
//             <input type='checkbox' checked={item.checked}/>
//             <label>{item.item}</label>
//             <FaTrashAlt role='button' tabIndex={0} />
//           </li>
//         ))}
//       </ul>
//     </main>
//   )
// }

// export default Content;



//                LIST $ KEYS ( checked event )
// import React from 'react';
// import { useState } from 'react';
// import { FaTrashAlt } from "react-icons/fa";


// const Content = () => {
//   const [items, setItems] = useState(
//     [
//       {
//         id:1,
//         checked: true,
//         item: "Practice Coding"
//       },
//       {
//         id:2,
//         checked: false,
//         item: "Watching WWE"
//       },
//       {
//         id:3,
//         checked: false,
//         item: "Read about AI"
//       }
//     ]
//   );
//   const handleCheck = (id) => {
//     const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item )
//     setItems(listItems);
//   }
//   return (
//     <main>
//       <ul>
//         {items.map((item) => (
//           <li className='item' key={item.id}>
//             <input type='checkbox' onChange={() => handleCheck(item.id) } checked={item.checked}/>
//             <label>{item.item}</label>
//             <FaTrashAlt role='button' tabIndex={0} />
//           </li>
//         ))}
//       </ul>
//     </main>
//   )
// }

// export default Content;

//                LIST $ KEYS ( delete event )
// import React from 'react';
// import { useState } from 'react';
// import { FaTrashAlt } from "react-icons/fa";


// const Content = () => {
//   const [items, setItems] = useState(
//     [
//       {
//         id:1,
//         checked: true,
//         item: "Practice Coding"
//       },
//       {
//         id:2,
//         checked: false,
//         item: "Watching WWE"
//       },
//       {
//         id:3,
//         checked: false,
//         item: "Read about AI"
//       }
//     ]
//   );
//   const handleCheck = (id) => {
//     const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item )
//     setItems(listItems);
//   }
//   const handleDelete = (id) => {
//     const listItems = items.filter((item) => item.id!==id)
//     setItems(listItems);
//   }
//   return (
//     <main>
//       <ul>
//         {items.map((item) => (
//           <li className='item' key={item.id}>
//             <input type='checkbox' onChange={() => handleCheck(item.id) } checked={item.checked}/>
//             <label>{item.item}</label>
//             <FaTrashAlt role='button' onClick={() => handleDelete(item.id)} tabIndex={0} />
//           </li>
//         ))}
//       </ul>
//     </main>
//   )
// }

// export default Content;


//                LIST $ KEYS ( storage )
// import React from 'react';
// import { useState } from 'react';
// import { FaTrashAlt } from "react-icons/fa";


// const Content = () => {
//   const [items, setItems] = useState(
//     [
//       {
//         id:1,
//         checked: true,
//         item: "Practice Coding"
//       },
//       {
//         id:2,
//         checked: false,
//         item: "Watching WWE"
//       },
//       {
//         id:3,
//         checked: false,
//         item: "Read about AI"
//       }
//     ]
//   );
//   const handleCheck = (id) => {
//     const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item )
//     setItems(listItems)
//     localStorage.setItem("todo_list", JSON.stringify(listItems))
//   }
//   const handleDelete = (id) => {
//     const listItems = items.filter((item) => item.id!==id)
//     setItems(listItems)    
//     localStorage.setItem("todo_list", JSON.stringify(listItems))
//   }
//   return (
//     <main>
//       <ul>
//         {items.map((item) => (
//           <li className='item' key={item.id}>
//             <input type='checkbox' onChange={() => handleCheck(item.id) } checked={item.checked}/>
//             <label>{item.item}</label>
//             <FaTrashAlt role='button' onClick={() => handleDelete(item.id)} tabIndex={0} />
//           </li>
//         ))}
//       </ul>
//     </main>
//   )
// }

// export default Content;


//                LIST $ KEYS ( label doubleClick event )
// import React from 'react';
// import { useState } from 'react';
// import { FaTrashAlt } from "react-icons/fa";


// const Content = () => {
//   const [items, setItems] = useState(
//     [
//       {
//         id:1,
//         checked: true,
//         item: "Practice Coding"
//       },
//       {
//         id:2,
//         checked: false,
//         item: "Watching WWE"
//       },
//       {
//         id:3,
//         checked: false,
//         item: "Read about AI"
//       }
//     ]
//   );
//   const handleCheck = (id) => {
//     const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item )
//     setItems(listItems)
//     localStorage.setItem("todo_list", JSON.stringify(listItems))
//   }
//   const handleDelete = (id) => {
//     const listItems = items.filter((item) => item.id!==id)
//     setItems(listItems)    
//     localStorage.setItem("todo_list", JSON.stringify(listItems))
//   }
//   return (
//     <main>
//       <ul>
//         {items.map((item) => (
//           <li className='item' key={item.id}>
//             <input type='checkbox' onChange={() => handleCheck(item.id) } checked={item.checked}/>
//             <label onDoubleClick={() => handleCheck(item.id) } >{item.item}</label>
//             <FaTrashAlt role='button' onClick={() => handleDelete(item.id)} tabIndex={0} />
//           </li>
//         ))}
//       </ul>
//     </main>
//   )
// }

// export default Content;



//                LIST $ KEYS ( label un-line )
// import React from 'react';
// import { useState } from 'react';
// import { FaTrashAlt } from "react-icons/fa";


// const Content = () => {
//   const [items, setItems] = useState(
//     [
//       {
//         id:1,
//         checked: true,
//         item: "Practice Coding"
//       },
//       {
//         id:2,
//         checked: false,
//         item: "Watching WWE"
//       },
//       {
//         id:3,
//         checked: false,
//         item: "Read about AI"
//       }
//     ]
//   );
//   const handleCheck = (id) => {
//     const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item )
//     setItems(listItems)
//     localStorage.setItem("todo_list", JSON.stringify(listItems))
//   }
//   const handleDelete = (id) => {
//     const listItems = items.filter((item) => item.id!==id)
//     setItems(listItems)    
//     localStorage.setItem("todo_list", JSON.stringify(listItems))
//   }
//   return (
//     <main>
//       <ul>
//         {items.map((item) => (
//           <li className='item' key={item.id}>
//             <input type='checkbox' onChange={() => handleCheck(item.id) } checked={item.checked}/>
//             <label style={(item.checked) ? {textDecoration: 'line-through'} : null } onDoubleClick={() => handleCheck(item.id) } >{item.item}</label>
//             <FaTrashAlt role='button' onClick={() => handleDelete(item.id)} tabIndex={0} />
//           </li>
//         ))}
//       </ul>
//     </main>
//   )
// }

// export default Content;



//                LIST $ KEYS ( empty )
// import React from 'react';
// import { useState } from 'react';
// import { FaTrashAlt } from "react-icons/fa";


// const Content = () => {
//   const [items, setItems] = useState(
//     [
//       {
//         id:1,
//         checked: true,
//         item: "Practice Coding"
//       },
//       {
//         id:2,
//         checked: false,
//         item: "Watching WWE"
//       },
//       {
//         id:3,
//         checked: false,
//         item: "Read about AI"
//       }
//     ]
//   );
//   const handleCheck = (id) => {
//     const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item )
//     setItems(listItems)
//     localStorage.setItem("todo_list", JSON.stringify(listItems))
//   }
//   const handleDelete = (id) => {
//     const listItems = items.filter((item) => item.id!==id)
//     setItems(listItems)    
//     localStorage.setItem("todo_list", JSON.stringify(listItems))
//   }
//   return (
//     <main>
//       {items.length ? (
//       <ul>
//         {items.map((item) => (
//           <li className='item' key={item.id}>
//             <input type='checkbox' onChange={() => handleCheck(item.id) } checked={item.checked}/>
//             <label style={(item.checked) ? {textDecoration: 'line-through'} : null } onDoubleClick={() => handleCheck(item.id) } >{item.item}</label>
//             <FaTrashAlt role='button' onClick={() => handleDelete(item.id)} tabIndex={0} />
//           </li>
//         ))}
//       </ul>
//       ) : <p>Your List is Empty</p> }
//     </main>
//   )
// }

// export default Content;


//                Props & Prop Drilling
import React from 'react';
import ItemLists from './ItemLists';

  const Content = ({items,handleCheck,handleDelete}) => {
  return (
    <>
      {(items.length) ? (
        <ItemLists items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      ) : <p>Your List is Empty</p> }
    </>
  )
}

export default Content;