// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtI3MH2y6eyahQNMRnCJn3VloW65r9ub8",
    authDomain: "moviesgpt-13f90.firebaseapp.com",
    projectId: "moviesgpt-13f90",
    storageBucket: "moviesgpt-13f90.firebasestorage.app",
    messagingSenderId: "648157989240",
    appId: "1:648157989240:web:1b2354e261915b810fa08d",
    measurementId: "G-14LHJQ3T69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);