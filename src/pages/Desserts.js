// src/pages/Desserts.js
import React from 'react';
import './Desserts.css'; // Import the CSS file for styling

const dessertRecipes = [
  {
    title: 'Chocolate Cake',
    description: 'Rich and moist chocolate cake topped with chocolate frosting.',
    image: 'path/to/chocolate-cake-image.jpg', // Replace with the actual image path
  },
  {
    title: 'Cheesecake',
    description: 'Creamy cheesecake with a graham cracker crust.',
    image: 'path/to/cheesecake-image.jpg', // Replace with the actual image path
  },
  {
    title: 'Apple Pie',
    description: 'Classic apple pie with a flaky crust and cinnamon filling.',
    image: 'path/to/apple-pie-image.jpg', // Replace with the actual image path
  },
  {
    title: 'Ice Cream Sundae',
    description: 'Delicious ice cream topped with chocolate sauce and nuts.',
    image: 'path/to/ice-cream-sundae-image.jpg', // Replace with the actual image path
  },
];

const Desserts = () => {
  return (
    <div className="desserts-container">
      <h1 className="desserts-title">Dessert Recipes</h1>
      <div className="desserts-recipeList">
        {dessertRecipes.map((recipe, index) => (
          <div key={index} className="desserts-recipeCard">
            <img src={recipe.image} alt={recipe.title} className="desserts-image" />
            <h2 className="desserts-recipeTitle">{recipe.title}</h2>
            <p className="desserts-description">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desserts;
