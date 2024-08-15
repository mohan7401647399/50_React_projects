import React, { useState } from 'react'

export default function StateExample() {
    const [user, setUser] = useState('React');

    const ChangeName = () => {
        setUser('React-Hooks')  
    }
    return (
        <div>
            <h3>{user}</h3>
            <button onClick={ChangeName}>ChangeName</button>
        </div>
    )
}
