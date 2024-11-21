import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, Link, BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/home/Home';
import './App.css';
import 'rsuite/dist/rsuite.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Terms from './components/terms/Terms';

function AppContent() {
  
  return (
    
    <div className="app-container">
     {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-condition" element={<Terms />} />
       
      </Routes>
    {/* </BrowserRouter> */}
           </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;