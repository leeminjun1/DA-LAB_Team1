import { useState } from 'react'
import './App.css'
import Intro from './pages/Intro'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App
