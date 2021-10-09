import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h2>Please Register</h2>
      <form>
        <input type='email' />
        <br />
        <input type='password' />
        <br />
        <button type='submit' value='Submit'>
          Submit
        </button>
      </form>
      <Link to='/login'>Already Register?</Link>
    </div>
  );
};

export default Register;
