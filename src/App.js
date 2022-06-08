import React from 'react'
import "./App.css"
import Login from './component/login/Login'
import Register from './component/register/Register'
// import Homepage from './component/homepage/Homepage'
// import List from './component/moveilist/List'
// import Topbar from './component/topbar/Topbar'
import {
   BrowserRouter as Router,
    Routes,
     Route 
    } from "react-router-dom";
import Home from './component/home/Home'
import Fullvedio from './component/fullvedio/Fullvedio';

const App = () => {
  return (
    <>

<Router>
      <Routes>
        <Route exact path="/homepage" element={<Home />}>
        </Route>
        <Route exact path="/" element={<Home />}>
        </Route>
       
          <Route exact path="/login" element={<Login />}>
          </Route>
          <Route exact path="/register" element={<Register />}>
          </Route>
          <Route exact path="/vedio" element={<Fullvedio />}>
         
        </Route>
        
      </Routes>
    </Router>

    {/* <Fullvedio/> */}


     
    </>
  )
}

export default App
