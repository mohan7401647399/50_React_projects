import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector(state => state.user.value);
    const theme = useSelector(state => state.theme.value);
    if(!user.name) {
        return
    }
  return (
    <div style={{"color": theme}}>
      <h1>Profile Info</h1>
      <h2>Name:{user.name}</h2>
      <h2>Age:{user.age}</h2>
      <h3>Email:{user.email}</h3>
    </div>
  );
}

export default Profile;
