import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initAppAuth from '../Firebase/firebase.init';

// Call Initialize app authentication f()

initAppAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const signInUsingGitHub = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        console.log('githubdata', result.user.providerData[0]);
        setUser(result.user.providerData[0]);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const signInUsingFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('load user sideEffect', user);
        setUser(user);
      } else {
        console.log('UserSignedOut');
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user,
    error,
    signInUsingGoogle,
    signInUsingGitHub,
    signInUsingFacebook,
    logOut,
  };
};

export default useFirebase;
