// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg3Kn2xlkSOvaTd0ZOHzsF0TFlyzMEdJE",
  authDomain: "recipe-finder-b17d5.firebaseapp.com",
  projectId: "recipe-finder-b17d5",
  storageBucket: "recipe-finder-b17d5.appspot.com",
  messagingSenderId: "818221093",
  appId: "1:818221093:web:cd9a9922754dd906c02fcc",
  measurementId: "G-YY7PYRC130"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
