import React, { memo } from 'react';


function HeaderUseCallback() {
    console.log('Heading Rendering')
    return (
        <h1 style={{backgroundColor: "#FFB6C1"}} >Counter Example</h1>
    )
}

export default memo(HeaderUseCallback);