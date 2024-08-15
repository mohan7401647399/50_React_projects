import React, { useState } from 'react';
import Square from './Square';
import Input from './Input';

const App = () => {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div>
      <Square colorValue={colorValue} hexValue={hexValue} isDarkText={setIsDarkText} />
      <Input colorValue={colorValue} setColorValue={setColorValue} setHexValue={setHexValue} isDarkText={isDarkText} setIsDarkText={setIsDarkText}/>
    </div>
  )
}

export default App