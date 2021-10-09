import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
  const { user, logOut } = useFirebase();
  console.log(user.email);
  return (
    <div className='header'>
      <Link to='/home'>Home</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
      <span>{user.displayName} </span>
      &nbsp;
      {user?.email && <button onClick={logOut}>log out </button>}
      &nbsp;
      {user?.email && (
        <img className='user-img' src={user.photoURL} alt='ProfilePhoto' />
      )}
    </div>
  );
};

export default Header;
