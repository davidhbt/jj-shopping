import React, { useEffect } from 'react'
import userWEBP from '../assets/WebP/User.webp'
import './Profile.css'
import { userState } from '../App'
import { signOut } from 'firebase/auth'
import { Auth_cfg } from '../Config/Firebase'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Auth() {
  const user = useContext(userState)
  const navigate = useNavigate()


  const handleSignout = async() =>{
    toast.success("Logged Out!")
    await signOut(Auth_cfg)
    navigate('/login')
    
  }

  return (
    <div className='page'>
      <div className="ProfileContainer">
         <div className="ProfileHeader">
                  <img src={userWEBP} alt="" className="ProfileHImg" />
                  <h1 className="ProfileHH1">
                    Welcome Back<br /> <span style={{color: 'var(--color1)'}}>{user?.displayName}</span>
                  </h1>
                  <p className='AuthHP'>{user?.email}</p>      
                </div>
        <button className="Logoutbtn" onClick={handleSignout}>Logout</button>
      </div>
    </div>
  )
}

export default Auth