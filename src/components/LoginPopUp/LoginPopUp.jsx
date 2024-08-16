import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />

            </div>
            <div className="login-popub-input">
                {currentState==="Login"?<></>:<input type="text" placeholder= 'Your name ' required />}

                <input type="email" placeholder= 'Your  email' required />
                <input type="password" placeholder= 'password' requireds/>
            </div>
            <button>{currentState==='Signup' ? "Create account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currentState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign up")}>Click here</span></p>
            :<p>Already have an account?<span onClick={()=>setCurrentState("Login")}>Click here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopUp
