import React, { useState } from "react";
import auth from "../../firebase.init";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Shipment = () => {
    
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const navigate = useNavigate()

    const handleNameBlur = event =>{
        setName(event.target.value);
    }
    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }
    const handleMobileNumberBlur = event =>{
        setMobileNumber(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name,email,mobileNumber,address}
        console.log(shipping);

    }    
  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Shipping Infomation</h2>
          <form onSubmit={handleCreateUser}>
            <div className="group">
              <label htmlFor="text">Your Name</label>
              <input onBlur={handleNameBlur} type="text" name="your-name" required />
            </div>
            <div className="group">
              <label htmlFor="email">Email</label>
              <input value={user?.email} readOnly type="email" name="" required />
            </div>
            <div className="group">
              <label htmlFor="text">Address</label>
              <input onBlur={handleAddressBlur} type="text" name="text" required />
            </div>
            <div className="group">
              <label htmlFor="number">Mobile Number</label>
              <input
                onBlur={handleMobileNumberBlur}
                type="number"
                name="mobile-number"
                required
              />
            </div>
            <div className="group">
              <input className="submit-btn" type="submit" value="Add Shipping" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
