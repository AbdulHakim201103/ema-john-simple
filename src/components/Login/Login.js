import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "./google .png";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  if (user) {
    navigate(from,{replace: true})
  }
  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email,password)
  };
  

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" required />
          </div>
          <div className="group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" required />
          </div> 
          <p style={{color:'red'}}>{error?.message}</p>
          {
            loading && <p>Loading ...</p>
          }
          <div className="group">
            <input className="submit-btn" type="submit" value="Login" />
          </div>
        </form>
        <p>
          New to Ema-John?
          <Link className="link-btn" to="/signup">
            Create an Account
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
  );
};

export default Login;
