import React, {useState} from 'react';


export const Home = () => {

const images= [
    {id:1, src: './assets/Room1', alt: 'Room1'},
    {id:2, src: './assets/Room2', alt: 'Room2'},
    {id:3, src: './assets/Room3', alt: 'Room3'},
    {id:4, src: './assets/Room4', alt: 'Room4'}
]
return (

    
<div>
<NavBar />

<div>
<input type="date" 
placeholder="enter email"
onChange={(event)=> setEmail(event.target.value)}/> 
{""}
 <br></br> <br></br>

<input type="date"  
 placeholder="enter password"
 onChange={(event)=> setPassword(event.target.value)}/> 
 {""}
 <br></br> <br></br>
 </div>
 <div>

 </div>
<button >logout</button>

</div>

);
    
};
