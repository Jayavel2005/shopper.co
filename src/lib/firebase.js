// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC89mK5ulL97TUFEDN1Zf9nw2sULZ-TdJc",
    authDomain: "nile-89bfa.firebaseapp.com",
    projectId: "nile-89bfa",
    storageBucket: "nile-89bfa.firebasestorage.app",
    messagingSenderId: "373215191292",
    appId: "1:373215191292:web:f32b1390c20e44f8a87779",
    measurementId: "G-ZZENFDRZRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);