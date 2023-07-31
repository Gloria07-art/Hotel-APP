import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './components/signUp';
import { Login } from './components/login';
// import { NoPageFound } from './components/noPageFound';
import {Home } from './components/home';
// import { Navbar } from './components/Navbar';

function App() {

  console.log()
  
  return (
    <div className="App">
      <>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
        </Routes>
        </>
     
    </div>
  );
}

export default App;
