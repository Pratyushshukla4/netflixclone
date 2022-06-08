import React from 'react'
import Homepage from '../homepage/Homepage';
import List from '../moveilist/List';
import "./Home.css";

const Home = () => {
  return (
      <>
    <div className="hhome">
      <Homepage/>
      {/* <Homepage/> */}
      </div> 
      <List/>
      </>

  )
}

export default Home
