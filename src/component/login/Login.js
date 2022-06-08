import React from 'react'
import "./Login.css"
import {
  Link
    } from "react-router-dom";

const Login = () => {
  return (
    <div className='login'>

         <div className="topregs">
          <spam className="leftregs">Netflix</spam>
          {/* <Link className='rrr' to="/register"> <spam className="rigisterregs">
          <button className='singUp'>Sign In </button>
          </spam></Link> */}
           <Link className='rrr' to="/register"><spam className="rigisterregs">
           <button className='singIn'>Sign Up</button>
          </spam></Link>
      </div>
        <div className="loginwrapper">
            <span className="signup">Sign Up</span>
            <input placeholder='contact@gmail.com' type="text" className="gmail" />
            <input placeholder='Password' type="text" className="password" />
           <Link className="btn" to="/homepage"> <button className="btn">Sign Up</button></Link>
            <span className="new">New to netflix ?  Sign up  now.</span>

            <span className="paira">This page is protected by google reCAPTCHA to ensure yor are not a bot. Learn more</span>
        </div>

      

      <div className="botttom"></div>
    </div>
  )
}

export default Login
