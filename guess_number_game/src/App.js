import { useState } from 'react';
import './App.css';
import Result from './Result';
const randomNum = Math.floor(Math.random() * 10) + 1;

function App() {
  const [num, setNum] = useState("");

  const handleChange = (e) => {
    setNum(e.target.value);
  }

  return (
    <div className="container">
      <div className='head'>
        <label htmlFor="term">Guess the number between 1 to 10 </ label>
        {/* <label htmlFor="term">Guess the number between 1 to 10 (Answer:{randomNum}) </label> */}
      </div>
      <input type="text" id='term' name='term' onChange={handleChange} />
      <Result randomNum={randomNum} num={num} />
    </div>
  );
}

export default App;
