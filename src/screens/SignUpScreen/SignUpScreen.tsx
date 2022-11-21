import { MouseEvent, useRef } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './SignUpScreen.css';

const content = {
  title: "Sign In",
  new: 'New to Netflix?',
  signUp: 'Sign Up now.',
}

export default function SignUpScreen() {
  const emailRef = useRef<HTMLInputElement>(null as any);
  const passwordRef = useRef<HTMLInputElement>(null as any);

  function register(e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error Message: " + errorMessage + "\n\nError Code: " + errorCode,);
      })
  }

  function signIn(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error Message: " + errorMessage + "\n\nError Code: " + errorCode,);
      })
  }

  return (
    <div className='signUpScreen'>
      <h1>{content.title}</h1>
      <form>
        <input ref={emailRef} placeholder='Email' type='email' />
        <input ref={passwordRef} placeholder='Password' type='password' />
        <button type='submit' onClick={(e) => signIn(e)} >{content.title}</button>

        <h4>
          <span className='signUpScreen__gray'>
            {content.new}
          </span>
          {" "}
          <span className='signUpScreen__link' onClick={(e) => register(e)}>
            {content.signUp}
          </span>
        </h4>
      </form>
    </div>
  )
}