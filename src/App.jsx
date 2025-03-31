import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import Nav from './Components/Nav'
import Auth from './Pages/Auth'
import Test from './Pages/Test'
import { ToastContainer } from 'react-toastify'
import CreateAccount from './Pages/CreateAccount.jsx'
import { createContext } from 'react'

export const contectP = createContext()

function App() {
  const data = 'uggu bagga'


  // console.log(TelegramSDK);
  return (
    <contectP.Provider value={data}>
    {/* <ToastContainer/> */}
    <ToastContainer toastStyle={{ backgroundColor: "var(--color3)" }} />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/auth' element={<Auth/>} />
      <Route path='/new' element={<CreateAccount/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <Nav/>
    </contectP.Provider>
  )
}

export default App