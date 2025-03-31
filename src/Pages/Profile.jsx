import React from 'react'
import userWEBP from '../assets/WebP/User.webp'
import './Profile.css'
import { userState } from '../App'
import { signOut } from 'firebase/auth'
import { Auth_cfg } from '../Config/Firebase'
import { useContext } from 'react'
import { toast } from 'react-toastify'

function Auth() {
  const user = useContext(userState)

  const handleSignout = async() =>{
    toast.success("Logged Out!")
    await signOut(Auth_cfg)
    
  }

  return (
    <div className='page'>
      <div className="ProfileContainer">
         <div className="ProfileHeader">
                  <img src={userWEBP} alt="" className="ProfileHImg" />
                  <h1 className="ProfileHH1">
                    Welcome Back<br /> <span style={{color: 'var(--color1)'}}>David</span>
                  </h1>
                  <p className='AuthHP'>DavidHabte@gmail.com</p>      
                </div>
        <button className="Logoutbtn" onClick={handleSignout}>Logout</button>
      </div>
    </div>
  )
}

export default Auth