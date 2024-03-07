// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJK8OVw5skgKXQi_13xxLtoj9qbdweU_Y",
    authDomain: "email-js-validation.firebaseapp.com",
    databaseURL: "https://email-js-validation-default-rtdb.firebaseio.com",
    projectId: "email-js-validation",
    storageBucket: "email-js-validation.appspot.com",
    messagingSenderId: "401699040091",
    appId: "1:401699040091:web:3491dde19355853458887e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);