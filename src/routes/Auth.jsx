import React, { useEffect, useState } from 'react';

import { authService } from '../firebase';
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import AuthForm from '../components/header/login/AuthForm';

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new GithubAuthProvider();
    }

    await signInWithPopup(authService, provider);
  };
  return (
    <div className='authContainer'>
      <AuthForm />
      <div className='authBtns'>
        <button onClick={onSocialClick} name='google' className='authBtn'>
          Continue with Google.
        </button>
        <button onClick={onSocialClick} name='github' className='authBtn'>
          Continue with Github.
        </button>
      </div>
    </div>
  );
};

export default Auth;
