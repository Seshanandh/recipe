// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContexts'; // Make sure the path is correct
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { currentUser, logout } = useAuth(); // Access currentUser and logout from AuthContext
  const navigate = useNavigate(); // To navigate after logout

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // Optionally navigate to the login page after logging out
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  return (
    <nav className="navbar">
      <h1>Recipe Finder</h1>
      <div className="links">
        <Link to="/" className="link">Home</Link>
        <div className="dropdown">
          <Link to="#" className="link" onClick={toggleDropdown}>
            Recipes
          </Link>
          {dropdownOpen && (
            <div className="dropdownMenu">
              <Link to="/recipes/breakfast" className="dropdownItem" onClick={closeDropdown}>Breakfast</Link>
              <Link to="/recipes/lunch" className="dropdownItem" onClick={closeDropdown}>Lunch</Link>
              <Link to="/recipes/evening-snacks" className="dropdownItem" onClick={closeDropdown}>Evening Snacks</Link>
              <Link to="/recipes/dinner" className="dropdownItem" onClick={closeDropdown}>Dinner</Link>
              <Link to="/recipes/desserts" className="dropdownItem" onClick={closeDropdown}>Desserts</Link>
            </div>
          )}
        </div>
        <input type="text" placeholder="Search recipes..." className="searchBar" />
        {currentUser ? (
          // Show Logout if user is logged in
          <Link onClick={handleLogout} to="/login" className="link">Logout</Link>
        ) : (
          // Show Login and Signup if no user is logged in
          <>
            <Link to="/login" className="link">Login</Link>
            <Link to="/signup" className="link">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
