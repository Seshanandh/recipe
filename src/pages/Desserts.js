// src/pages/Desserts.js
import React from 'react';

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
    <div style={styles.container}>
      <h1 style={styles.title}>Dessert Recipes</h1>
      <div style={styles.recipeList}>
        {dessertRecipes.map((recipe, index) => (
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

export default Desserts;
