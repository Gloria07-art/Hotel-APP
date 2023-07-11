import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './components/signUp';
import { Login } from './components/login';
import { NoPageFound } from './components/noPageFound';
import {Home } from './components/home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <SignUp/>
    </div>
  );
}

export default App;
