// src/pages/Dinner.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import spaghettiCarbonaraImage from '../assets/spaghetti-carbonara.jpg'; // Replace with actual path
import grilledChickenImage from '../assets/grilled-chicken.jpg'; // Replace with actual path
import vegetableStirFryImage from '../assets/vegetable-stir-fry.jpg'; // Replace with actual path
import beefTacosImage from '../assets/chicken-tacos.jpg'; // Replace with actual path
import './Dinner.css'; // Import the CSS file for styling

const Dinner = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate('/recipes');
  };

  const dinnerRecipes = [
    {
      title: 'Spaghetti Carbonara',
      description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.',
      image: spaghettiCarbonaraImage,
    },
    {
      title: 'Grilled Chicken',
      description: 'Juicy grilled chicken served with a side of vegetables.',
      image: grilledChickenImage,
    },
    {
      title: 'Vegetable Stir Fry',
      description: 'Colorful mix of vegetables stir-fried with soy sauce and sesame oil.',
      image: vegetableStirFryImage,
    },
    {
      title: 'chicken Tacos',
      description: 'Delicious tacos filled with seasoned chicken and fresh toppings.',
      image: beefTacosImage,
    },
  ];

  return (
    <div className="dinner-container">
      <div className="dinner-banner">
        <h1 className="dinner-title">Dinner Recipes</h1>
        <div className="dinner-recipeList">
          {dinnerRecipes.map((recipe, index) => (
            <div key={index} className="dinner-recipeCard">
              <img src={recipe.image} alt={recipe.title} className="dinner-image" />
              <h2 className="dinner-recipeTitle">{recipe.title}</h2>
              <p className="dinner-description">{recipe.description}</p>
            </div>
          ))}
        </div>
        <div className="dinner-button-container">
          <button className="dinner-button" onClick={handleViewAllClick}>View All Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default Dinner;
