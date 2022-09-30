import React,{useState} from "react";
import './ProceedPay.css';
import StripeCheckout from "react-stripe-checkout";

const ProceedPay=()=>{
    const[product,setProduct]=useState({
        name:"React for FB",
        price:10,
        productBy:"facebook"
    })

    const makePayment=(token)=>{
        const body={
            token,
            product
        }
        const headers={
            "Content-Type":"application/json"
        }
        return fetch(`http://localhost:8090/payment`,{
            method:"post",
            headers:headers,
            body:JSON.stringify(body)
        }).then((res)=>{
            console.log('Reasponce', res)
            const {status}=res
            console.log("status",status)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div className="proceedMain">  
    
        <form className="form">
            <input className="form-control" type='text' placeholder="Name" />
            <input className="form-control" type='text' placeholder="Mobile" />
            <input className="form-control" type='text' placeholder="Pincode" />
            <input className="form-control" type='text' placeholder="Location" />
            <textarea className="text-area" placeholder="Address" ></textarea>
            <input className="form-control" type='text' placeholder="City/District/Town" />
            <input className="form-control" type='text' placeholder="LandMark(Optional)" />
            <input className="form-control" type='text' placeholder="State" />
            <input className="form-control" type='text' placeholder="Country" />
            <button className="delivaryBtn">Save & Delivery </button>
        </form>
          <div className="payment">
            <h2>Payment Method</h2>
            {/* <button className="btn-pay">Pay Now</button> */}
            <StripeCheckout
            stripeKey="pk_test_51LmyMISARljj1GntxpQ1jMAoDZaHigbmTwldutkaVKCGI6oT9a7t8Qy8HTwpF21ic1sxK94VvNnZXYYYfWqIm48B00pXNQegJ6"
            token={makePayment}
            name="Pay For Product"
            amount={product.price *100}

                >
                    <button className="btn-pay"> pay now {product.price} $ </button>
                </StripeCheckout>
            </div>      
        </div>
    )
}


export default ProceedPay