// src/pages/Breakfast.js
import React from 'react';

const breakfastRecipes = [
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
];

const Breakfast = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Breakfast Recipes</h1>
      <div style={styles.recipeList}>
        {breakfastRecipes.map((recipe, index) => (
          <div key={index} style={styles.recipeCard}>
            <img src={recipe.image} alt={recipe.title} style={styles.image} />
            <h2 style={styles.recipeTitle}>{recipe.title}</h2>
            <p style={styles.description}>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Simple styles for the component
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f0f8ff',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  recipeList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    padding: '25px', // Increased padding for a larger card
    width: '350px', // Increased width of the card
    textAlign: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    height: 'auto',
  },
  recipeTitle: {
    fontSize: '1.75rem', // Increased font size for the title
    margin: '10px 0',
  },
  description: {
    fontSize: '1.2rem', // Increased font size for the description
    color: '#555',
  },
};

export default Breakfast;
