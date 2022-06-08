import React from 'react'
import "./Register.css"
import {
    Link
      } from "react-router-dom";

const Register = () => {
  return (
      
    <div className='register'>

      <div className="topregs">
          <spam className="leftregs">Netflix</spam>
          <Link className='rrr' to="/login"><spam className="rigisterregs">
           <button className='singIn'>Sign In </button>
          </spam></Link>
      </div>

      <div className="centerregs">
          <div className="centertopreg">
              <h1>Unlimited Tv shows movies and more..</h1>
          </div>
          <div className="centercenterreg">
              <span className='sp'>Watch anytime , cancel anytime</span>
              <p className='spp'>Ready to watch?Enter your email to create or restart your membership</p>

          </div>
          <div className="centerbottomreg">
              <div className="enteremail">
                  <input placeholder='contact@gmail.com' type="text" className="inemail" />
                  <button className="get">Get started</button>
              </div>
          </div>

      </div>

      <div className="bottomregs">
          
          <img src="/assests/girrl.jpg" alt="" className="i" />
      </div>
    </div>
   
 
  )
}

export default Register
