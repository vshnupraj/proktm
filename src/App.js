
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'; 
import Branches from './pages/Branches'; 
import Navbar from './components/Navbar'; 
import './App.css'; 

const App = () => {
  return (
    
      <div className="container-fluid app  ">
        <div className='row'>
          <div className='col '>
        <h1 className='text-center app1'>PROFESSIONAL COURIER KOTTAYAM</h1>
        <BrowserRouter>
    
        {/* Navigation Menu */}
        <Navbar />

        <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/Branches' element={<Branches />} />
     
      </Routes>
      </BrowserRouter>
      </div>
      </div>
      </div>
  );
};

export default App;

