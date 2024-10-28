// src/services/authService.js
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
// import { login } from '../services/authService';

import { auth } from '../firebase';

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};