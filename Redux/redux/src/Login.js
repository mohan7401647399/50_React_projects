import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './features/User';

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const user = useSelector(state => state.user.value)

  return (
    <div>
      {!user.name && (<>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" value={age} onChange={e => setAge(e.target.value)} />
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </>)}
      {
      !user.name ? <button onClick={() => dispatch(login({ name, age , email }))} >Login</button> :
      <button onClick={() => dispatch(logout())} >Logout</button>
    }
    </div>
  
  );
}

export default Login;
