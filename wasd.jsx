import React, { useState } from 'react'
import Google_icon from '../assets/Google-icon.png'
import User_icon from '../assets/WebP/User.webp'
import './Auth.css'
import { toast } from 'react-toastify'
import { Auth_cfg } from '../Config/Firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { Link } from 'react-router-dom'

function CreateAccount() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('') // Add a state for the name

  const handleCreateAccount = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(Auth_cfg, email, password)
      const user = userCredential.user

      // Update the user's profile with the name
      await updateProfile(user, {
        displayName: name,
      })

      console.log('Account created for:', user.displayName)
      toast.success('Account created successfully!')
    } catch (err) {
      console.error(err)
      toast.error('Error creating account')
    }
  }

  return (
    <div className='page'>
      <div className="AuthContainer">
        <div className="AuthHeader">
          <img src={User_icon} alt="" className="AuthHImg" />
          <h1 className="AuthHH1">
            Create Account  <br /> <span style={{color: 'var(--color1)'}}></span>
          </h1>
        </div>
        <div className="AuthContent">
          <form className='AuthCForm' onSubmit={(e) => {
            e.preventDefault()
            handleCreateAccount()
          }}>
            <div className="AuthCFInputContainer">
              <label className='AuthCFICLabel'>
                Name
              </label>
              <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name' className="AuthCFIInput" />
            </div>
            <div className="AuthCFInputContainer">
              <label className='AuthCFICLabel'>
                Email
              </label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='example@gmail.com' className="AuthCFIInput" />
            </div>
            <div className="AuthCFInputContainer">
              <label className='AuthCFICLabel'>
                Password
              </label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='must be 8 characters or longer' className="AuthCFIInput" />
              <Link className='signinoption'>Or create a new account</Link>
            </div>

            <input type="submit" value="Create Account" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount