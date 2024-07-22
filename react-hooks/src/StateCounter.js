// import React, { useState } from 'react'

// export default function StateCounter() {
//     const [counter, setCounter] = useState(100);

//     const Increment = () => {
//         setCounter((prev) => prev + 3)
//     }

//     const Decrement = () => {
//         setCounter((prev) => prev - 3)
//     }
//     return (
//         <div>
//             <h3>{`Counter is ${counter}`}</h3>
//             <button onClick={Increment} >Increment + 3</button>
//             <button onClick={Decrement} >Decrement - 3</button>
//         </div>
//     )
// }


//          OBJECT STATE


import React, { useState } from 'react'

export default function StateCounter() {
    const [counter, setCounter] = useState({value:100, type:'counter'});

    const Increment = () => {
        setCounter((prevCounter) => {
            return {value:prevCounter.value + 3}
        })
    }

    const Decrement = () => {
        setCounter((prevCounter) => {
            return {value:prevCounter.value - 3}
    })
    }

    return (
        <div>
            <h3>{`Counter is ${counter.value}`}</h3>
            <button onClick={Increment} >Increment + 3</button>
            <button onClick={Decrement} >Decrement - 3</button>
        </div>
    )
}
