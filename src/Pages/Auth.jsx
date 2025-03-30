import React, { useEffect, useState } from 'react'
import Google_icon from '../assets/Google-icon.png'
import User_icon from '../assets/WebP/User.webp'
import './Auth.css'
import { Auth_cfg } from '../Config/Firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Auth() {
  const [user, setUser] = useState()
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(Auth_cfg, provider); // Use Auth_cfg directly
      const user = result.user;
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  useEffect(() => {
    setUser(Auth_cfg?.currentUser?.displayName)
  }, [])

  return (
    <div className='page'>
      <div className="AuthContainer">
        <div className="AuthHeader">
          <img src={User_icon} alt="" className="AuthHImg" />
          <h1 className="AuthHH1">
            Authentication  <br /> <span style={{color: 'var(--color1)'}}></span>
            
          </h1>
          <p className='AuthHP'>Who are you?</p>
          <p>{user ? <>wsg</> : <>hell nah</>}</p>
        </div>
        <div className="AuthContent">
          <div className="AuthCLogin" onClick={handleGoogleSignIn}>
            <img src={Google_icon} alt="" className="AuthCImg" />
            <h1 className="AuthCH1">Sign in with  <span style={{color: 'var(--color1)'}}>Google</span></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth