import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/signUp';
import { Login } from './pages/login';
import { Reviews } from './components/reviews';
import {Home } from './pages/home';
import { ContactUs } from './components/contactUs';
import {Front} from './pages/front';
import { Rooms } from './components/Rooms';

function App() {

  console.log()
  
  return (
    <div className="App">
      <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='signUp' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='reviews' element={<Reviews/>}/>
        <Route path='contactUs' element={<ContactUs/>}/>
        <Route path='rooms' element={<Rooms/>}/>
        </Routes>
        </>
     
    </div>
  );
}

export default App;
