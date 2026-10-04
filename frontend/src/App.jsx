import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="p-8 text-2xl font-bold">Welcome to SmartCampus AI</div>} />
      </Routes>
    </Router>
  );
}

export default App;
