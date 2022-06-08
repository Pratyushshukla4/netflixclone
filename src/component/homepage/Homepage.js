import React from 'react'
import Topbar from '../topbar/Topbar'
import "./Homepage.css"

const Homepage = () => {
  return (
    <>
    <div className="home">
        <Topbar/>
        <div className="hhtt">
        <div className="centersss">
          <div className="titalname">
            <h1 className="maintital">KGF CHAPTER 2</h1>
            <span className="sectital">Volume 2</span>
          </div>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum consequuntur dolores, dolore fuga sint vel doloribus magnam neque facilis.</p>
          <div className="botton">
            <button className="play"><i class="fa-solid fa-play  iv"></i>Play</button>
            <button className="info"><i class="fa-solid fa-circle-info ivf"></i>Info</button>
          </div>
        </div>
        </div>

    </div>
      
    </>
  )
}

export default Homepage
