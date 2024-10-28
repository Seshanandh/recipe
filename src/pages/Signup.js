// src/pages/Signup.js
import React, { useState } from 'react';
import { signup } from '../services/authServices';
import { useNavigate } from 'react-router-dom';
import signupBackground from '../assets/signup-background.jpg'; // Updated to the new image name

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    setError(''); // Reset error
    if (!termsAccepted) {
      setError('You must accept the terms and conditions.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true); // Start loading state
    try {
      await signup(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h2 style={styles.title}>Sign Up</h2>
        {error && <p style={styles.error}>{error}</p>} {/* Display error message */}
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={styles.input} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={styles.input} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={styles.input} 
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          style={styles.input} 
        />
        <label style={styles.checkboxLabel}>
          <input 
            type="checkbox" 
            checked={termsAccepted} 
            onChange={(e) => setTermsAccepted(e.target.checked)} 
            style={styles.checkbox} 
          />
          I accept the terms and conditions
        </label>
        <button onClick={handleSignup} style={styles.button} disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </div>
    </div>
  );
};

// Simple styles for the component
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${signupBackground})`, // Set background image
    backgroundSize: 'cover', // Cover the entire viewport
    backgroundPosition: 'center', // Center the image
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with opacity
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for depth
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the items
    width: '100%', // Full width of the overlay
    maxWidth: '400px', // Limit maximum width
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    fontSize: '0.9rem',
    color: '#333',
  },
  checkbox: {
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Signup;
