import React, { useEffect, useState } from 'react'
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

export const userState = createContext();

function App() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    const AuthState = Auth_cfg.onAuthStateChanged((user) =>{
      setUser(user)
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
    </Routes>
    <Nav/>
    </userState.Provider>
  )
}

export default App