// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-P6GSQ6VrfXsznMxHXAcB5b1QBqOG1zU",
  authDomain: "router-firebase-integrating01.firebaseapp.com",
  projectId: "router-firebase-integrating01",
  storageBucket: "router-firebase-integrating01.appspot.com",
  messagingSenderId: "191145341894",
  appId: "1:191145341894:web:ec581dae0a92d3a95fb8c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;