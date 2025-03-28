import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import Nav from './Components/Nav'


function App() {
  // console.log(TelegramSDK);
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <Nav/>
    </>
  )
}

export default App