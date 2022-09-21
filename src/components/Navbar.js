import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";


const Navbar=()=>{

    return(
        <div className="navbar">
            <h1 >Capital Traders </h1>
            <div className="cartAlign">
            <p>Cart</p>
            </div>
        </div>
    )
}

export default Navbar