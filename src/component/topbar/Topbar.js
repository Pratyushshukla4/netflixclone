import React, { useState } from 'react'
import "./Topbar.scss"
import {
 Link
   } from "react-router-dom";

const Topbar = () => {

  const [scrolled , setscrollled] = useState(false)

  window.onscroll=()=>{
    setscrollled(window.pageYOffset===0 ? false : true)
    return ()=> (window.onscroll= null)
  }
  
  return (
    <>
    
 <div className={scrolled?"topbar scrolled" : "topbar"}> 

        <div className="lefttop">
            <div className="lleft">
                <span className="tital">Netflix</span>
                </div>

                <div className="navhead">
                    <Link to="/homepage" className="head">Homepage</Link>
                    <Link to="/" className="head">Series</Link>
                    <Link to="/" className="head">Movies</Link>
                    <Link to="/" className="head  disp">New and Popular</Link>
                    <Link to="/login" className="head">Logout</Link>
                
            </div>
            {/* <div className="rleft"></div> */}
        </div>

        <div className="righttop">
            <div className="lright"></div>

         <div className="rright">
           <img src="/assests/search.png" alt="" className="searchicon" />
           <span className="kid">Kid</span>
           <img src="/assests/bell.png" alt="" className="notification" />
           <img src="/assests/girrl.jpg" alt="" className="profile" />

           <div className="dropdown">
           <img src="/assests/drop.png" alt="" className="drop" />
           <div className="d30">
           <Link to="/" className="d10" >Setting</Link>
           <Link to="/login" className="d10">Logout</Link>

           </div>
           </div>
           
         </div>
        </div>
    </div>
      
    </>
  )
}

export default Topbar
