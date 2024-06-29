import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
    </div>
  );
}


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
