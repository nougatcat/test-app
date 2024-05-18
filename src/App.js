
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import Employees from './components/Employees/Employees';
import About from './components/About/About';

function App() {
  return (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        <Routes> 
          <Route path='*' element={<div><h1>404 NOT FOUND</h1></div>} />
          <Route path="/" element={<Navigate to="/employees" />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
)
}

export default App;
