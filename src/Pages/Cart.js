import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { selectCart,incrementCount,decrementCount } from "../features/cart/cartSlice";
import './Cart.css'
import {Link, useNavigate } from "react-router-dom";


const Cart=()=>{
    const cartItems=useSelector(selectCart)
    const dispatch=useDispatch()

    const increment=(val)=>{
        dispatch(incrementCount(val))
    }
    const decrement=(val)=>{
            dispatch(decrementCount(val))
    }
    const navigate=useNavigate()
    const placeOrder=()=>{
        navigate('/checkCart')
    }

    return(
        <div className="cartStyle">

            {
                cartItems.length===0 ?<> <p className="emptyCart">Your Cart is Empty Please Add Items </p><Link className="link" to='/' >Shop Now</Link> </> :<>  {
                    cartItems.map((ele,i)=>{
                        return(
                            <div key={i} className ='card'>
                                <div className="content">
                                <p className="prodName">{ele.name} </p>
                                <p className="prodName">Price {ele.price} $ </p>
                                <p className="prodName">Quantity: {ele.totalQuantity} ml </p>

                                {
                                    ele.cartValue?<p className="prodPrice" >Total: {ele.cartValue } $ </p>:
                                    <p className="prodPrice" >Total Value: {ele.price.toFixed(4) } $ </p>
                                }

                                <button onClick={()=>{decrement(ele)}} className="btn">-</button><span className="ordNum"> {ele.numbers}  </span> <button  className="btn" onClick={()=>increment(ele)} >+</button>
                                </div>
                                </div>
                        )
                    })
                }
                    <button className="btnSubmit" onClick={placeOrder}>Place Order</button> </>
            }
         
          
        </div>
    )
}


export default Cart