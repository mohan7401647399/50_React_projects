import React from 'react';
import colornames from 'colornames'

const Input = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name: </label>
      <input type="text" autoFocus placeholder='Add Color Name' required value={colorValue} onChange={(e) => {
        setColorValue(e.target.value);
        setHexValue(colornames(e.target.value))
      }} />
      <button type='button' onClick={() => setIsDarkText(!isDarkText)} >Toggle Text Color</button>
      
    </form>
  );
}

export default Input;
