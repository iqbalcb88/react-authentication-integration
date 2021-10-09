import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user.email);
  return (
    <div className='header'>
      <Link to='/home'>Home</Link>
      <Link to='/shipping'>Shipping</Link>
      <Link to='/placeorder'>PlaceOrder</Link>
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
