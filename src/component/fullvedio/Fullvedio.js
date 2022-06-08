import React from 'react'
import { Link } from 'react-router-dom'
import "./Fullvedio.scss"
// import {
//     Link
//       } from "react-router-dom";

const Fullvedio = () => {
  return (
    <div className='fullvedio'>

        <h1 className="hhed">
        <Link to="/homepage"  class="fa-solid fa-arrow-left ml"></Link>
        Home
        </h1>
        {/* <h1>home</h1> */}

       {/* <video autoPlay={true} loop className='vdo' src="https://vod-progressive.akamaized.net/exp=1624452918~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2400%2F14%2F362003850%2F1486625955.mp4~hmac=d6f829e7bb83f1ee6a28047d00aa2c1083c8fe5036c8084a4adf1c3903085856/vimeo-prod-skyfire-std-us/01/2400/14/362003850/1486625955.mp4"></video> */}
       <img src="/assests/girrl.jpg" className='vdo' alt="" />

       
      
    </div>
  )
}

export default Fullvedio
