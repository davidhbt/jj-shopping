import React, { useState , useEffect} from 'react'
import Google_icon from '../assets/Google-icon.png'
import User_icon from '../assets/WebP/User.webp'
import './Auth.css'
import { toast } from 'react-toastify'
import { Auth_cfg,  } from '../Config/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { userState } from '../App'
import { useNavigate } from 'react-router-dom'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const user = useContext(userState)

  // useEffect(() => {
  //   if(user != null){
  //     navigate('/')
  //   }
  // })
  

  // console.log(data)
  console.log(user)


  const handleLogin = async () =>{
    toast.info("Processing.")
    try{

      await signInWithEmailAndPassword(Auth_cfg, email, password)
      toast.success("Logged in.")
      navigate('/')
    }catch(err){
      // alert()
      console.log(err)
      toast.error("Incorrect Email Or Password.")
    }
  }

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
          <form className='AuthCForm' onSubmit={(e) => {
            e.preventDefault()
            handleLogin()
          }}>
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
              <input onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' type="password" placeholder='must be 8 characters or longer' className="AuthCFIInput" />
              <Link to='/new' className='signinoption'>Or create a new account</Link>
            </div>

            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login