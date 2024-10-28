// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContexts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer component
// Import your recipe category components
import Breakfast from './pages/Breakfast';
import Lunch from './pages/Lunch';
import EveningSnacks from './pages/EveningSnacks';
import Dinner from './pages/Dinner';
import Desserts from './pages/Desserts';
import Recipes from './pages/Recipes'; // Import the combined Recipes component

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recipes" element={<Recipes />} /> {/* Route for combined recipes */}
          <Route path="/recipes/breakfast" element={<Breakfast />} />
          <Route path="/recipes/lunch" element={<Lunch />} />
          <Route path="/recipes/evening-snacks" element={<EveningSnacks />} />
          <Route path="/recipes/dinner" element={<Dinner />} />
          <Route path="/recipes/desserts" element={<Desserts />} />
        </Routes>
        <Footer /> {/* Include Footer here */}
      </Router>
    </AuthProvider>
  );
}

export default App;
