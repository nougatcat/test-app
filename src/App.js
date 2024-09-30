
import './App.css';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import EmployeesContainer from './components/Employees/EmployeesContainer';

function App() {
  return (
  // <BrowserRouter>
  <HashRouter basename='/'>
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        <Routes> 
          <Route path='*' element={<div><h1>404 NOT FOUND</h1></div>} />
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/employees" element={<EmployeesContainer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
    </HashRouter>
  // </BrowserRouter>
)
}

export default App;
