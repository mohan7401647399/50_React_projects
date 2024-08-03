// import React from 'react';
// import { FaPlus } from 'react-icons/fa';

// function AddItem({newItem, setnewItem, handleSubmit}) {
//   return (
//     <form className='addForm' onSubmit={handleSubmit}>
//         <label htmlFor="addItem">Add Item </label>
//         <input type="text" autoFocus required id='addItem' placeholder='Add Item' value={newItem} onChange= {(e) => setnewItem(e.target.value)} />
//         <button type='submit' aria-label='Add Item'>
//             <FaPlus/>
//         </button>
//     </form>
//   )
// }

// export default AddItem



//              UseRef Hook
import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

function AddItem({newItem, setnewItem, handleSubmit}) {
  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item </label>
        <input ref={inputRef} type="text" autoFocus required id='addItem' placeholder='Add Item' value={newItem} onChange= {(e) => setnewItem(e.target.value)} />
        <button onClick={() => inputRef.current.focus()} type='submit' aria-label='Add Item'>
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem