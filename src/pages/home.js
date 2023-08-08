import React, { useState } from "react";
import NavBar from "./NavBar";
import Room1 from "./assets/Room1.jpg";
import Room2 from "./assets/Room2.jpg";
import Room3 from "./assets/Room3.jpg";
import Room4 from "./assets/Room4.jpg";
import Room5 from "./assets/Room5.jpg";
import Room6 from "./assets/Room6.jpg";
import './styles/home.css'

export const Home = () => {
  return (
    <div>
      <NavBar />

      <div>

        <div className="room-container" >
        
          <img src={Room1} alt="" style={{ width: "10%" }} />
          <div>
          <h1>Room 1</h1>
          </div>
          
          <p>
            This room exudes the summery vibes of summery <br></br>summer and
            you will feel refeshed after a long sleep.
          </p>
        
        </div>

        <div> 
          
          <img src={Room2} alt="" style={{ width: "10%" }} />
           <div> <h1>Room 2</h1></div>
          <div> <p>
            This room exudes the summery vibes of summery <br></br>summer and
            you will feel refeshed after a long sleep.
          </p></div>
         
        
        </div>

        <div>
       
          <img src={Room3} alt="" style={{ width: "10%" }} />
           <div><h1>Room 3</h1></div>
          <div><p>
            This room exudes the summery vibes of summery <br></br>summer and
            you will feel refeshed after a long sleep.
          </p></div>
           
           </div>

          <div>
     
          <img src={Room4} alt="" style={{ width: "10%" }} />
          <div>  <h1>Room 4</h1></div>
         <div> <p>
            This room exudes the summery vibes of summery <br></br>summer and
            you will feel refeshed after a long sleep.
          </p></div> 
         
        </div>
<div>
        <input type="date" placeholder="enter email" />
        
        <br></br> <br></br>
        <input type="date" placeholder="enter password" />
        </div>
        <br></br> <br></br>
      </div>
      <div></div>
      <button>logout</button>
    </div>
  );


};
