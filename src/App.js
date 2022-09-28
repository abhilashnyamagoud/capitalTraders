import React from "react";
import Dashboard from "./Pages/Dashboard";
import Cart from "./Pages/Cart";
import './App.css'
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Payment from "./Pages/Payment";
import ProceedPay from "./Pages/ProceedPay";


const App=()=>{

  return(
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Dashboard/>}  />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkCart" element={<Payment/>} />
      <Route path="/paybill" element={<ProceedPay />} />
      </Routes>
     
    </div>
  )
}


export default App