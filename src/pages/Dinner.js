// src/pages/Dinner.js
import React from 'react';

const dinnerRecipes = [
  {
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.',
    image: 'path/to/spaghetti-carbonara-image.jpg', // Replace with the actual image path
  },
  {
    title: 'Grilled Chicken',
    description: 'Juicy grilled chicken served with a side of vegetables.',
    image: 'path/to/grilled-chicken-image.jpg', // Replace with the actual image path
  },
  {
    title: 'Vegetable Stir Fry',
    description: 'Colorful mix of vegetables stir-fried with soy sauce and sesame oil.',
    image: 'path/to/vegetable-stir-fry-image.jpg', // Replace with the actual image path
  },
  {
    title: 'Beef Tacos',
    description: 'Delicious tacos filled with seasoned beef and fresh toppings.',
    image: 'path/to/beef-tacos-image.jpg', // Replace with the actual image path
  },
];

const Dinner = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dinner Recipes</h1>
      <div style={styles.recipeList}>
        {dinnerRecipes.map((recipe, index) => (
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

export default Dinner;
