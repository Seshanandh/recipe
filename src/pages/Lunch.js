// src/pages/Lunch.js
import React from 'react';
import './Lunch.css'; // Import the CSS file

const lunchRecipes = [
  {
    title: 'Grilled Chicken Salad',
    description: 'A healthy salad with grilled chicken, greens, and a light vinaigrette.',
    image: 'path/to/grilled-chicken-salad-image.jpg', // Replace with the actual image path
  },
  {
    title: 'Veggie Wrap',
    description: 'A delicious wrap filled with fresh vegetables and hummus.',
    image: 'path/to/veggie-wrap-image.jpg', // Replace with the actual image path
  },
  {
    title: 'Pasta Primavera',
    description: 'Pasta tossed with seasonal vegetables in a light sauce.',
    image: 'path/to/pasta-primavera-image.jpg', // Replace with the actual image path
  },
  {
    title: 'Quinoa Bowl',
    description: 'A nourishing bowl of quinoa topped with veggies and a tahini dressing.',
    image: 'path/to/quinoa-bowl-image.jpg', // Replace with the actual image path
  },
];

const Lunch = () => {
  return (
    <div className="lunch-container">
      <h1 className="lunch-title">Lunch Recipes</h1>
      <div className="lunch-recipe-list">
        {lunchRecipes.map((recipe, index) => (
          <div key={index} className="lunch-recipe-card">
            <img src={recipe.image} alt={recipe.title} className="lunch-image" />
            <h2 className="lunch-recipe-title">{recipe.title}</h2>
            <p className="lunch-description">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lunch;
