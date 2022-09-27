import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { selectCart,incrementCount,decrementCount } from "../features/cart/cartSlice";
import './Cart.css'


const Cart=()=>{

    const cartItems=useSelector(selectCart)
    const dispatch=useDispatch()

    const increment=(val)=>{
        dispatch(incrementCount(val))
    }
    const decrement=(val)=>{
            dispatch(decrementCount(val))
    }
    const placeOrder=()=>{
        alert('pressed')
    }

    return(
        <div className="cartStyle">
         
            {
                cartItems.map((ele,i)=>{
                    return(
                        <div key={i} className ='card'>
                            <div className="content">
                            <p className="prodName">{ele.name} </p>
                            <p className="prodName">Price {ele.price} $ </p>
                            {
                                ele.cartValue?<p className="prodPrice" >Cart Value: {ele.cartValue } $ </p>:
                                <p className="prodPrice" >Total Value: {ele.price.toFixed(4) } $ </p>
                            }
                            <button onClick={()=>{decrement(ele)}} className="btn">-</button><span className="ordNum"> {ele.numbers}  </span> <button  className="btn" onClick={()=>increment(ele)} >+</button>
                            </div>
                            </div>
                    )
                })
            }
                <button className="btnSubmit" onClick={placeOrder}>Place Order</button>
        </div>
    )
}


export default Cart