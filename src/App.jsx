import { useState } from 'react'
import './App.css'
import Intro from './pages/Intro'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import { Routes, Route } from 'react-router-dom'
import SpaceMain from './pages/SpaceMain'
import ReceiverMain from './pages/ReceiverMain'
import GiverMain from './pages/GiverMain'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<SpaceMain />} />
        <Route path="/receiver-main" element={<ReceiverMain />} />
        <Route path="/giver-main" element={<GiverMain />} />
    </Routes>
    </>
  )
}

export default App
