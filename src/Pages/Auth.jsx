import React, { useEffect, useState } from 'react'
import Google_icon from '../assets/Google-icon.png'
import User_icon from '../assets/WebP/User.webp'
import './Auth.css'
import { Auth_cfg } from '../Config/Firebase'
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from "firebase/auth";

function Auth() {
  const [user, setUser] = useState();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(Auth_cfg, provider); // Use redirect instead of popup
  };

  useEffect(() => {
    const fetchRedirectResult = async () => {
      try {
        const result = await getRedirectResult(Auth_cfg);
        if (result) {
          const user = result.user;
          console.log("User signed in:", user);
          setUser(user.displayName);
        }
      } catch (error) {
        console.error("Error during redirect sign-in:", error);
      }
    };

    fetchRedirectResult();
  }, []);

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