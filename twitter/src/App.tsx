// import { useState } from 'react'
// import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

import Home from './components/Home'

import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
// import Profile from './pages/Profile'




function App() {

  return (
    <>


    <div className="flex h-screen">
      <LeftSide></LeftSide>
      <Home></Home>
      <RightSide></RightSide>
    </div>
    </>
  )
}

export default App
