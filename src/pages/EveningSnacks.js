import React from 'react';
import './EveningSnacks.css'; // Import the CSS file

const eveningSnacksRecipes = [
  {
    title: 'Samosa',
    description: 'Crispy pastry filled with spiced potatoes and peas.',
    image: 'D:/mern stack project/recipe/src/assets/Samosa.jpg', // Replace with the actual image path
  },
  {
    title: 'Paneer Tikka',
    description: 'Grilled paneer marinated in spices and served with chutney.',
    image: 'path/to/paneer-tikka-image.jpg', // Replace with the actual image path
  },
  {
    title: 'Spring Rolls',
    description: 'Crispy rolls filled with vegetables and served with sauce.',
    image: 'path/to/spring-rolls-image.jpg', // Replace with the actual image path
  },
  {
    title: 'Masala Chai',
    description: 'Aromatic spiced tea served with snacks.',
    image: 'path/to/masala-chai-image.jpg', // Replace with the actual image path
  },
];

const EveningSnacks = () => {
  return (
    <div className="container">
      <h1 className="title">Evening Snacks Recipes</h1>
      <div className="recipeList">
        {eveningSnacksRecipes.map((recipe, index) => (
          <div key={index} className="recipeCard">
            <img src={recipe.image} alt={recipe.title} className="image" />
            <h2 className="recipeTitle">{recipe.title}</h2>
            <p className="description">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EveningSnacks;
