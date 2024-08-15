import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    // Type 1: Execute on render at all time state changes
    // useEffect(() => {
    //     console.log('UseEffect is running')
    // Type 2:Execute on rendering at particular state changes
    // useEffect(() => {
    //     console.log('UseEffect is running')
    // },[counter1])
    // Type 2:Execute on rendering at one time page rendering
    useEffect(() => {
        console.log('UseEffect is running')
    },[])
    return (
        <>
            <h1> {counter1} </h1>   
            <h1> {counter2} </h1>
            <button onClick={()=> setCounter1 (counter1+ 1)} >Increment 1</button>  
            <button onClick={()=> setCounter2 (counter2+ 1)} >Increment 2</button>  
        </>
    )
}
