import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../features/cart/cartSlice";


const Navbar=()=>{

    const cartItems=useSelector(selectCart)

    return(
        <div className="navbar">
            
            <Link to='/' className="linkStyle" > <h1 >Capital Traders </h1></Link>
            <div className="cartAlign">
            <Link to='/cart' className="linkStyle" > <h2>Cart - {cartItems.length} </h2> </Link>
            </div>
        </div>
    )
}

export default Navbar