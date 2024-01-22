import React, { useState } from 'react';
import Home from './Pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import axios from 'axios';
import Signup from './components/signup';
import DashHome from './components/DashHome';
import MainContent from './components/MainContent';


function App() {

  

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/> }/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/DashHome' element={<DashHome/>}/>
    
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
