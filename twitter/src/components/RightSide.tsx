
// import axios from 'axios'
// import { useState } from 'react'
// import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";


function RightSide() {
  return (
    <div className="h-screen bg-slate-400 flex flex-row">
      <div className="flex-1"></div>
      <div className="flex flex-col bg-white w-1/3 px-6 py-1">
        <div className="bg-slate-100 rounded-t-full p-3 flex flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" className="w-6 h-6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"/></svg>
          <input type="text" className="bg-transparent w-full px-2 focus:ring-0 outline-none" placeholder="Search"/>
        </div>
        <div className="bg-slate-200 flex flex-col p-3 rounded-r-2xl my-3">
        <h1>Explore section</h1>
        </div>
        
      </div>
    </div>
  )
}

export default RightSide


