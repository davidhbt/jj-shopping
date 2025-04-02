import React, { use, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import Nav from './Components/Nav'
// import Auth from './Pages/Login.jsx'
import Profile from './Pages/Profile.jsx'
import Test from './Pages/Test'
import { ToastContainer } from 'react-toastify'
import CreateAccount from './Pages/CreateAccount.jsx'
import { createContext } from 'react'
import Login from './Pages/Login.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { Auth_cfg } from './Config/Firebase.js'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Catagory from './Pages/Catagory.jsx'

export const userState = createContext();

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname


  const [user, setUser] = useState(undefined)

  useEffect(() =>{
    // if logged in

    if (user != null && (path == '/login' || path == '/new' )) {
      navigate('/profile')
      console.log('first')
    }
    // if not logged in
    if(user === null && (path == '/profile' || path == '/')){
      navigate('/login')
      console.log(user, 'wsg')
      console.log('second')
    }
  }, [location, user])


  useEffect(() => {
    console.log('loading', )
    console.log('Current time in milliseconds:', Date.now());
    const AuthState = Auth_cfg.onAuthStateChanged((user) =>{
      setUser(user)
      console.log('loading finished')
      console.log('Current time in milliseconds:', Date.now());
    })


    return () => AuthState()
  }, [])




  // console.log(TelegramSDK);
  return (
    <userState.Provider value={user}>
    {/* <ToastContainer/> */}
    <ToastContainer toastStyle={{ backgroundColor: "var(--color3)" }} />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/new' element={<CreateAccount/>} />
      <Route path='*' element={<NotFound/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/catagory/:id' element={<Catagory/>} />
    </Routes>
    <Nav/>
    </userState.Provider>
  )
}

export default App