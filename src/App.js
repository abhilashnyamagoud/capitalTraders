import React from "react";
import Dashboard from "./Pages/Dashboard";
import './App.css'
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";


const App=()=>{

  return(
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Dashboard/>} />
      </Routes>
     
    </div>
  )
}


export default App