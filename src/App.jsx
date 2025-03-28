import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import * as SDK from "@telegram-apps/sdk-react";


function App() {
  // console.log(TelegramSDK);
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App