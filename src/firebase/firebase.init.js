// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYKKcldY8hcCZV2g33hjTnGHdyrymD7Vg",
    authDomain: "project-zavar.firebaseapp.com",
    projectId: "project-zavar",
    storageBucket: "project-zavar.appspot.com",
    messagingSenderId: "638282080751",
    appId: "1:638282080751:web:5453e348ac5cc0af3c561a",
    measurementId: "G-2LFQF73YV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export default auth;