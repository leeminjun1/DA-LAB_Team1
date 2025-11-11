import { useState } from 'react'
import './App.css'
import Intro from './pages/Intro'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
