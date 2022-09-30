import React,{useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../features/cart/cartSlice";
import './Payment.css'
import { useNavigate } from "react-router-dom";

const Payment=()=>{

    const cartItems=useSelector(selectCart)
    const [totalVal,setTotalVal]=useState(null)

    const navigate=useNavigate()
    

    useEffect(()=>{
        let total=0
          cartItems.forEach((ele)=>{
            return total +=ele.cartValue
          })
          setTotalVal(total)
    },[cartItems])

    const proceed=()=>{
        navigate('/paybill')
    }

    return(
        <div className="payMain">
            <div className="paymentCard">
            <h3>Price Details ({cartItems.length}) items </h3>
            <hr/>
            <p className="para"><strong> Price:</strong> {totalVal}  </p>  
            <p className="para"><strong>Delivery Charge:</strong>  0 </p>
            <p><strong>Total: </strong> {totalVal}  </p>
            <button className="payButton" onClick={proceed} > Add Address & Proceed </button>
            </div>
          
            <div className="cartItems">
                <p className="paraCheckout">CheckOut Your Products   </p>
                {
                    cartItems.map((ele,i)=>{
                        return(
                            <div key={i} className="itemCard">
                            <p className="paraItem"> <strong>Item</strong>: {ele.name} </p>
                            <p className="paraItem"> <strong>Price</strong>: {ele.price} </p>
                            <p className="paraItem"> <strong>CartValue</strong>: {ele.cartValue} </p>   
                            <p className="paraItem"> <strong>Quantity</strong>: {ele.totalQuantity} ml </p>
                            <hr/>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Payment