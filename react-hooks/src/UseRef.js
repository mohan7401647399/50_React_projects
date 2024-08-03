//                      Norendering 

// import React, { useRef, useState } from 'react'

// export default function UseRef() {
//     const [counter, setCounter] = useState(0);
//     const counteRef = useRef(0);

//     const handleClick = () => {
//         setCounter(counter + 1)
//         console.log('HandleClick is running')
//     }
//     const RefhandleClick = () => {
//         counteRef.current ++
//         console.log('UseREF is running')
//     }
//     console.log('UseRef is rendering')
//     return (
//         <>
//             <h1> {`Count is ${counter}`} </h1>
//             <h1> {`Count is ${counteRef.current}`} </h1>
//             <button onClick={handleClick}>Increment Count</button>
//             <button onClick={RefhandleClick}>UseRef Increment Count</button>
//         </>
//     )   
// }


//                  DOM

// import React, { useEffect, useRef } from 'react'

// export default function UseRef() {
//     const textRef = useRef();

//     useEffect(() => {
//         textRef.current.focus()
//     })

//     return (
//         <div>
//             <input ref={textRef} type="text" />
//         </div>
//     )
// }


//                  Previous State

import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [inputValue, setInputvalue] = useState('');
    const prevRef = useRef('');

    useEffect(() => {
        prevRef.current = inputValue
    },[inputValue])

    return (
        <div>
           <input value={inputValue} onChange={(e) => setInputvalue(e.target.value)} type="text"/>
           <h2>Current Value: {inputValue}</h2>
           <h2>Previue Value: {prevRef.current}</h2>
        </div>
    )
}
