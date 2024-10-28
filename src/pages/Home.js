// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import recipeImage from '../assets/recipe-image.jpg';
import './Home.css'; // Import the CSS file

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/recipes');
  };

  return (
    <div className="home-container">
      <div className="home-banner">
        <img src={recipeImage} alt="Delicious recipes" className="home-image" />
        <div className="home-text-overlay">
          <h1 className="home-title">Welcome to the Recipe Finder!</h1>
          <p className="home-description">
            Discover your favorite recipes, share them with friends, and enjoy cooking!
          </p>
          <div className="home-button-container">
            <button className="home-button" onClick={handleGetStartedClick}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
