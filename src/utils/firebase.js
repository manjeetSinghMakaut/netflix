// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdtyc765BP4-vLnJGh7umN9vqhUBiZNe4",
  authDomain: "netflixgpt-290ee.firebaseapp.com",
  projectId: "netflixgpt-290ee",
  storageBucket: "netflixgpt-290ee.firebasestorage.app",
  messagingSenderId: "19029413712",
  appId: "1:19029413712:web:131788eee675533b256655",
  measurementId: "G-S51DLZYM20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app); // Pass the app instance
export const analytics = getAnalytics(app); // Pass the app instance
