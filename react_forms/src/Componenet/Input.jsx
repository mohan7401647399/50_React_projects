// import React from 'react'

// export default function Input(props) {
//     return (
//         <div className='input'>
//             <label htmlFor="">Username</label>
//             {/* <input type="text" name="" id="" placeholder={props.placeholder} onChange={e => props.setUserName(e.target.value)} /> */}
//             {/* <input type="text" placeholder={props.placeholder} ref={props.refer} /> */}
//             <input type="text" placeholder={props.placeholder} name={props.name} />
//         </div>
//     )
// }



// import React from 'react';
// import '../App.css';

// export default function Input(props) {
//     const { label, id,errorMessage, handleChange, ...inputProps } = props;

//     return (
//         <div className='input'>
//             <label>{label}</label>
//             <input {...inputProps} onChange={handleChange} />
//             <span>{errorMessage}</span>
//         </div>
//     )
// }



import { useState } from "react";
import '../App.css';

const Input = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default Input;