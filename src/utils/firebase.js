// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUayHwcma-w2K8GVmt673vXWcpIO4GpLI",
    authDomain: "netflixgpt-afe52.firebaseapp.com",
    projectId: "netflixgpt-afe52",
    storageBucket: "netflixgpt-afe52.firebasestorage.app",
    messagingSenderId: "94623131686",
    appId: "1:94623131686:web:0a25cb08a9f9db95251ee7",
    measurementId: "G-NNTZN60VT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);