// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd3IBLsoIhTe7W1F-UXpWLtstRyO_IgD4",
  authDomain: "techxtents-7.firebaseapp.com",
  projectId: "techxtents-7",
  storageBucket: "techxtents-7.firebasestorage.app",
  messagingSenderId: "241287580039",
  appId: "1:241287580039:web:d77e466c5013e80dda2b22",
  measurementId: "G-XPSK3HBQCD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
