import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
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
<div>
    <h1>Login Page</h1>

<input type="text" 
placeholder="enter email"
onChange={(event)=> setEmail(event.target.value)}/> 
{""}
 <br></br> <br></br>

<input type="password"  
 placeholder="enter password"
 onChange={(event)=> setPassword(event.target.value)}/> 
 {""}
 <br></br> <br></br>

<button onClick={register}>Login</button>
</div>
)
    
}

