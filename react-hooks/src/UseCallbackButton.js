import React, { memo } from 'react';


function UseCallbackButton({title, eventHandler}) {

    console.log(`Button rendering for ${title}`)
    
    return (
        <button onClick={eventHandler} > {title} </button>
    )
}

export default memo(UseCallbackButton);