// src/pages/EveningSnacks.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import samosaImage from '../assets/Samosa.jpg'; // Replace with actual path
import paneerTikkaImage from '../assets/Paneer Tikka.jpg'; // Replace with actual path
import springRollsImage from '../assets/Spring Rolls.jpg'; // Replace with actual path
import masalaChaiImage from '../assets/Masala Chai.jpg'; // Replace with actual path
import './EveningSnacks.css'; // Import the CSS file

const EveningSnacks = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/recipes');
  };

  const eveningSnacksRecipes = [
    {
      title: 'Samosa',
      description: 'Crispy pastry filled with spiced potatoes and peas.',
      image: samosaImage,
    },
    {
      title: 'Paneer Tikka',
      description: 'Grilled paneer marinated in spices and served with chutney.',
      image: paneerTikkaImage,
    },
    {
      title: 'Spring Rolls',
      description: 'Crispy rolls filled with vegetables and served with sauce.',
      image: springRollsImage,
    },
    {
      title: 'Masala Chai',
      description: 'Aromatic spiced tea served with snacks.',
      image: masalaChaiImage,
    },
  ];

  return (
    <div className="evening-snacks-container">
      <div className="evening-snacks-banner">
        <h1 className="evening-snacks-title">Evening Snacks Recipes</h1>
        <div className="evening-snacks-list">
          {eveningSnacksRecipes.map((recipe, index) => (
            <div key={index} className="evening-snacks-card">
              <img src={recipe.image} alt={recipe.title} className="evening-snacks-image" />
              <h2 className="evening-snacks-recipe-title">{recipe.title}</h2>
              <p className="evening-snacks-description">{recipe.description}</p>
            </div>
          ))}
        </div>
        <div className="evening-snacks-button-container">
          <button className="evening-snacks-button" onClick={handleGetStartedClick}>View All Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default EveningSnacks;
