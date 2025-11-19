import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import SpaceMain from './pages/SpaceMain'
import ReceiverMain from './pages/ReceiverMain'
import GiverMain from './pages/GiverMain'
import LookBook from './pages/LookBook'


function App() {
  return (
    <>
      <Routes>
        <Route path="/main" element={<SpaceMain />} />
        <Route path="/receiver-main" element={<ReceiverMain />} />
        <Route path="/giver-main" element={<GiverMain />} />
        <Route path='/look-book' element={<LookBook />} />
    </Routes>
    </>
  )
}

export default App
