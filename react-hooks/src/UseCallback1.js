import React, { memo } from 'react';


function UseCallback1({title, value}) {
    console.log(`UseCallback is rendering ${title}`)
    return (
        <div style={{backgroundColor: "#FFFFE0"}} >
            <h3>{title}</h3>
            <h5>{value}</h5>
        </div>
    )
}

export default memo(UseCallback1);