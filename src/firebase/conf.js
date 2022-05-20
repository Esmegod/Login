// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArHVGI2CDmCXQk3cduWrX6RLeL6e06RJ4",
    authDomain: "react-login-56b56.firebaseapp.com",
    projectId: "react-login-56b56",
    storageBucket: "react-login-56b56.appspot.com",
    messagingSenderId: "412708126257",
    appId: "1:412708126257:web:8b87f7883d3d21157ddf10",
    measurementId: "G-P7RWH4LTZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;