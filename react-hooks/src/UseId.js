import React, { useId } from 'react'

export default function UseId() {
    const id = useId()
    const id2 = useId()
    return (
        <>
        {/* Differenct Uniq ID */}
            <h1>{id}</h1>
            <h1>{id2}</h1>
            <label htmlFor={id}>Name</label>
            <input type="text" id={id}/>
            <label htmlFor={id2}>Name</label>
            <input type="text" id={id2}/>
            <br />
            {/* Same uniq ID */}
            <label htmlFor={`${id}-name`}>Name</label>
            <input type="text" id={`${id}-name`}/>
            <label htmlFor={`${id}-age`}>Age</label>
            <input type="text" id={`${id}-name`}/>
        </>
    )
}
