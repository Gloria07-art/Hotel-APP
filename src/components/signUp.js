import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './signUp.css'

export const SignUp = () => {

const navigate = useNavigate();

const [email, setEmail] = useState('');
const [password, setPassword]= useState('');

const register = (() => {
createUserWithEmailAndPassword(email, password).then(()=>{
alert("Registered successfully");


}).catch((error) =>{

})

})

return (
<div className='reg' class='img'>
   <img src='./assets/Untitled design(1).png' alt=''/>
    <h1>Sign Up</h1>
    <input type="text" 
placeholder="enter username"
onChange={(event)=> setEmail(event.target.value)}
/> 
{""}
<br></br> <ul></ul> 
<input type="text" 
placeholder="enter email"
onChange={(event)=> setEmail(event.target.value)}
/> 
{""}
 <br></br> <ul></ul> 
 
<input type="password"  
 placeholder="enter password"
 onChange={(event)=> setPassword(event.target.value)}/> 
 {""}
 <br></br> <ul></ul> 

 <input type="text" 
placeholder="confirm password"
onChange={(event)=> setEmail(event.target.value)}
/> 
{""}
 <br></br> <ul></ul> 

<button className='up' onClick={register}>Sign Up</button>

</div>
)
    
}

