// src/pages/Recipes.js
import React from 'react';
import './Recipes.css'; // Import the CSS file

// Combined recipes for different categories
const allRecipes = {
  breakfast: [
    {
      title: 'Pancakes',
      description: 'Fluffy pancakes served with maple syrup.',
      image: 'path/to/pancakes-image.jpg', // Replace with the actual image path
    },
    {
      title: 'Omelette',
      description: 'A classic omelette filled with cheese and vegetables.',
      image: 'path/to/omelette-image.jpg', // Replace with the actual image path
    },
    {
      title: 'Smoothie Bowl',
      description: 'A refreshing smoothie bowl topped with fruits and nuts.',
      image: 'path/to/smoothie-bowl-image.jpg', // Replace with the actual image path
    },
    {
      title: 'Avocado Toast',
      description: 'Toasted bread topped with mashed avocado and spices.',
      image: 'path/to/avocado-toast-image.jpg', // Replace with the actual image path
    },
  ],
  lunch: [
    {
      title: 'Caesar Salad',
      description: 'Crisp romaine lettuce with Caesar dressing and croutons.',
      image: 'path/to/caesar-salad-image.jpg', // Replace with the actual image path
    },
    {
      title: 'Grilled Chicken Sandwich',
      description: 'Tender grilled chicken with lettuce and tomato.',
      image: 'path/to/grilled-chicken-sandwich-image.jpg', // Replace with the actual image path
    },
    {
      title: 'Quinoa Bowl',
      description: 'Nutritious quinoa topped with roasted vegetables.',
      image: 'path/to/quinoa-bowl-image.jpg', // Replace with the actual image path
    },
  ],
  eveningSnacks: [
    {
      title: 'Nachos',
      description: 'Crispy tortilla chips topped with cheese and jalapeños.',
      image: 'path/to/nachos-image.jpg', // Replace with the actual image path
    },
    {
      title: 'Hummus and Veggies',
      description: 'Creamy hummus served with fresh vegetables.',
      image: 'path/to/hummus-image.jpg', // Replace with the actual image path
    },
  ],
  dinner: [
    {
      title: 'Spaghetti Bolognese',
      description: 'Classic spaghetti served with rich Bolognese sauce.',
      image: 'path/to/spaghetti-image.jpg', // Replace with the actual image path
    },
    {
      title: 'Grilled Salmon',
      description: 'Perfectly grilled salmon served with asparagus.',
      image: 'path/to/grilled-salmon-image.jpg', // Replace with the actual image path
    },
  ],
  desserts: [
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
  ],
};

const Recipes = () => {
  return (
    <div className="recipes-container">
      <h1 className="recipes-title">All Recipes</h1>
      {Object.entries(allRecipes).map(([category, recipes]) => (
        <div key={category} className="recipes-category">
          <h2 className="recipes-category-title">
            {category.charAt(0).toUpperCase() + category.slice(1)} Recipes
          </h2>
          <div className="recipes-list">
            {recipes.map((recipe, index) => (
              <div key={index} className="recipes-card">
                <img src={recipe.image} alt={recipe.title} className="recipes-image" />
                <h3 className="recipes-card-title">{recipe.title}</h3>
                <p className="recipes-description">{recipe.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
