import { useState } from 'react'
import './App.css'
import SignUp from './pages/SignUp/SignUp'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App
