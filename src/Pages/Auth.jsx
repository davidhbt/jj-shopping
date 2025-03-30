import React, { useState , useEffect} from 'react'
import Google_icon from '../assets/Google-icon.png'
import User_icon from '../assets/WebP/User.webp'
import './Auth.css'



function Auth() {
  const [user, setUser] = useState()

    useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const userInfo = window.Telegram.WebApp.initDataUnsafe.user;
      setUser(userInfo);
    }
  }, []);

  console.log(user)
  return (
    <div className='page'>
      <div className="AuthContainer">
        <div className="AuthHeader">
          <img src={User_icon} alt="" className="AuthHImg" />
          <h1 className="AuthHH1">
            Authentication  <br /> <span style={{color: 'var(--color1)'}}></span>
            
          </h1>
          {/* <p className='AuthHP'>Who are you?</p> */}
          
        </div>
        <div className="AuthContent">
          {/* <div className="AuthCLogin">
            <img src={Google_icon} alt="" className="AuthCImg" />
            <h1 className="AuthCH1">Sign in with  <span style={{color: 'var(--color1)'}}>Google</span></h1>
          </div> */}
          <form className='AuthCForm'>
            <div className="AuthCFInputContainer">
              <label className='AuthCFICLabel'>
                Email
              </label>
              <input type="email" placeholder='Email' className="AuthCFIInput" />
            </div>
            <div className="AuthCFInputContainer">
              <label className='AuthCFICLabel'>
                Password
              </label>
              <input type="email" placeholder='Password' className="AuthCFIInput" />
              <p className='signinoption'>Or create a account</p>
            </div>

            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth