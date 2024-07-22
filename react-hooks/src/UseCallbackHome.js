import React, { useCallback, useState } from 'react'
import HeaderUseCallback from './HeaderUseCallback';
import UseCallback1 from './UseCallback1';
import UseCallbackButton from './UseCallbackButton';

function UseCallbackHome() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(100);

    const increment1 = useCallback(() => {
        setCounter1(counter1 + 1)}, [counter1])

    const increment2 = useCallback(() => {
        setCounter2(counter2 + 2)}, [counter2])

    return (
        <>
            <HeaderUseCallback/>
            <UseCallback1 title="counter1 :" value={counter1}/>
            <UseCallbackButton title='increment1' eventHandler={increment1}/>
            <UseCallback1 title="counter2 :" value={counter2}/>
            <UseCallbackButton title='increment2' eventHandler={increment2}/>
        </>
    )
}

export default UseCallbackHome
