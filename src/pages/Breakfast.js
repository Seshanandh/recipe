// src/pages/Breakfast.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import pancakesImage from '../assets/pancakes.jpg'; // Replace with the actual image path
import omeletteImage from '../assets/omelette.jpg'; // Replace with the actual image path
import smoothieBowlImage from '../assets/smoothie-bowl.jpg'; // Replace with the actual image path
import avocadoToastImage from '../assets/avocado-toast.jpg'; // Replace with the actual image path
import './Breakfast.css'; // Import the CSS file for styling

const Breakfast = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate('/recipes');
  };

  const breakfastRecipes = [
    {
      title: 'Pancakes',
      description: 'Fluffy pancakes served with maple syrup.',
      image: pancakesImage,
    },
    {
      title: 'Omelette',
      description: 'A classic omelette filled with cheese and vegetables.',
      image: omeletteImage,
    },
    {
      title: 'Smoothie Bowl',
      description: 'A refreshing smoothie bowl topped with fruits and nuts.',
      image: smoothieBowlImage,
    },
    {
      title: 'Avocado Toast',
      description: 'Toasted bread topped with mashed avocado and spices.',
      image: avocadoToastImage,
    },
  ];

  return (
    <div className="breakfast-container">
      <h1 className="breakfast-title">Breakfast Recipes</h1>
      <div className="breakfast-recipeList">
        {breakfastRecipes.map((recipe, index) => (
          <div key={index} className="breakfast-recipeCard">
            <img src={recipe.image} alt={recipe.title} className="breakfast-image" />
            <h2 className="breakfast-recipeTitle">{recipe.title}</h2>
            <p className="breakfast-description">{recipe.description}</p>
          </div>
        ))}
      </div>
      <div className="breakfast-button-container">
        <button className="breakfast-button" onClick={handleViewAllClick}>View All Recipes</button>
      </div>
    </div>
  );
};

export default Breakfast;
