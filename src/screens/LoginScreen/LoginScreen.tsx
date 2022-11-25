import React, { useState } from 'react'
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import './LoginScreen.css'

const content = {
  buttonText: 'Sign In',
  unlimited: "Unlimited movies, TV shows, and more.",
  anywhereAnytime: "Watch anywhere. Cancel at any time.",
  ready: "Ready to watch? Enter your email to create or restart your membership.",
  getStarted: "Get Started",
}

export default function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
      <div className='loginScreen__background'>
        <img
          className='loginScreen__logo'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='Netflix logo' />
        <button
          onClick={(e) => { e.preventDefault(); setSignIn(true) }}
          className='loginScreen__button'>
          {content.buttonText}
        </button>
        <div className='loginScreen__gradient' />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignUpScreen />
        ) :
          (
            <>
              <h1>{content.unlimited}</h1>
              <h2>{content.anywhereAnytime}</h2>
              <h3>{content.ready}</h3>

              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={(e) => { e.preventDefault(); setSignIn(true) }}
                    className='loginScreen__getStarted'>
                    {content.getStarted.toUpperCase()}
                  </button>
                </form>
              </div>
            </>
          )}
      </div>
    </div>
  )
}