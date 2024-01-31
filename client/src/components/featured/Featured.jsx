import React, { useState } from "react";
import "./Featured.scss";
import {useNavigate} from "react-router-dom"

const Featured =()=>{
  const [input, setInput] = useState("");
  const navigate= useNavigate();

  const handleSubmit = ()=>{
    navigate(`/gigs?search=${input}`);
  }
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1> Find the perfect <i>helping</i> services for you</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try finding a driver for you' 
              onChange={(e)=> setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Driver</button>
            <button>Car washer</button>
            <button>Housekeeping</button>
            <button>Babysitter</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/helperr.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Featured