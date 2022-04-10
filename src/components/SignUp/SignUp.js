import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import google from "../Login/google .png";
import "./SignUp.css";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)


    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/home')
        
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
          setError("Your passwords did not match")
          return;
        }
        if (password.length < 6) {
            setError("Password must be 6 characters or longer")
            return;
        }
        createUserWithEmailAndPassword(email,password)
      };
  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Sign Up</h2>
          <form onSubmit={handleCreateUser}>
            <div className="group">
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="email" name="email" required/>
            </div>
            <div className="group">
              <label htmlFor="password">Password</label>
              <input onBlur={handlePasswordBlur} type="password" name="password" required/>
            </div>
            <div className="group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" required/>
            </div>
            <p style={{color:'red'}}>{error}</p>
            <div className="group">
              <input className="submit-btn" type="submit" value="Sign Up" />
            </div>
          </form>
          <p>
            Already have an account?
            <Link className="link-btn" to="/login">
            Please Login
            </Link>
          </p>
          <hr />
          <div className="group">
            <button className="btn">
              <img src={google} alt="" srcset="" /> Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
