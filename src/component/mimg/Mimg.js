import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Mimg.scss"

const Mimg = () => {

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

   const [ishover , setishover] = useState(false)

  return (
    <>

     <div className="im" onMouseEnter={()=>setishover(true)} onMouseLeave={()=>setishover(false)}>

       {
         ishover ? <video className='moveiimg' src={trailer} autoPlay={true} loop></video> :<img className='moveiimg' src="/assests/girrl.jpg" alt=""  />
       }
       {/* <img className='moveiimg' src="/assests/girrl.jpg" alt=""  /> */}

       {
         ishover &&  <div className="infivedio">

         <div className="infoicons">
         <Link to="/vedio" class="fa-solid fa-play iii io"></Link>
         <i class="fa-solid fa-plus iii"></i>
         <i class="fa-solid fa-thumbs-up iii"></i>
         <i class="fa-solid fa-thumbs-down iii"></i>
         </div>
 
         <div className="iteminfotop">
           <span className='item1'>1 hour 16 min</span>
           <span className='item1'>+16</span>
           <span className='item1'>1999</span>
         </div>
 
         <div className="desssc">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam autem laboriosam perspiciatis voluptas aspernatur?
         </div>
 
 <div className="genre">Action</div>
 
        </div>
       }

     
       </div>
    </>
  )
}

export default Mimg
