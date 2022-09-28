import React from "react";
import './ProceedPay.css';

const ProceedPay=()=>{

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
            </div>      
        </div>
    )
}


export default ProceedPay