import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import Nav from './Components/Nav'
import Auth from './Pages/Auth'
import Test from './Pages/Test'
import { ToastContainer } from 'react-toastify'


function App() {
  // console.log(TelegramSDK);
  return (
    <>
    {/* <ToastContainer/> */}
    <ToastContainer toastStyle={{ backgroundColor: "var(--color3)" }} />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/auth' element={<Auth/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <Nav/>
    </>
  )
}

export default App