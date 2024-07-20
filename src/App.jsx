import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Authors from './pages/Authors';
import Dashboard from './pages/Dashboard';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
