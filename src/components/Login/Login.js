import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  const { signInUsingGoogle, signInUsingGitHub, signInUsingFacebook } =
    useFirebase();
  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={signInUsingGoogle}>Google Sign In</button>
      <br />
      <button onClick={signInUsingGitHub}>GitHub Sign In</button>
      <br />
      <button onClick={signInUsingFacebook}>FaceBook Sign In</button>
      <br />
      <Link to='/register'>New User?</Link>
    </div>
  );
};

export default Login;
