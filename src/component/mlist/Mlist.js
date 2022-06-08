import React ,{ useRef, useState } from 'react'
import Mimg from '../mimg/Mimg';
import "./Mlist.scss"

const Mlist = () => {

    const [slidenumber , setslidenumber] = useState(0);
    const [ ismoved , setismoved] = useState(false);

    const listref = useRef();
    
    

    const handleclick =(direction)=>{
      
        setismoved(true)
    let distance = listref.current.getBoundingClientRect().x-50;
    // console.log(distance)

    if(direction === "left" && slidenumber>0)

    {
        setslidenumber(slidenumber-1)
        // listref.current.style.transform =  "translateX(125px)";
        listref.current.style.transform =  `translateX(${250 + distance}px)`;
        console.log("left")
        console.log(slidenumber)
    }
    if(direction === "right" && slidenumber<5)
    {
        setslidenumber(slidenumber+1)
        console.log(slidenumber)
        // listref.current.style.transform =  "translateX(-125px)";
        listref.current.style.transform =  `translateX(${-250 + distance}px)`;
        console.log("right")
    }
    }
  return (
    <>
       <div className="list">
            <div className="listtype">
              <span className="lname">Continue to Watch</span>  
                </div>
            <div className="movietype">

                <span className="lefticon">
                <i class="fa-solid fa-chevron-left icn iccn" onClick={()=>handleclick("left")} style={{display: !ismoved && 'none'}}></i>
                </span>

                <div className="imgg" ref={listref}>
               
                <Mimg/>
                <Mimg/>
                <Mimg/>
                <Mimg/>
                <Mimg/>
                <Mimg/>
                <Mimg/>
                <Mimg/>
                <Mimg/>
                <Mimg/>


                </div>

                <span className="righticon">
                <i class="fa-solid fa-angle-right icn iccr" onClick={()=>handleclick("right")}></i>
                </span>
            </div>
        </div>
    </>
  )
}

export default Mlist







