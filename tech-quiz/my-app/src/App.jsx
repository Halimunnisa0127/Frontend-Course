import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JioHome from './Components/JioHome/JioHome';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<JioHome />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
