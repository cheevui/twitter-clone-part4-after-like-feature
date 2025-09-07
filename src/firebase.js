// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkAoJbgE33B2VcMLYZNMw_4HmHhLOeuPw",
    authDomain: "twitter-app-59f0e.firebaseapp.com",
    projectId: "twitter-app-59f0e",
    storageBucket: "twitter-app-59f0e.appspot.com",
    messagingSenderId: "7867213470",
    appId: "1:7867213470:web:d8b8e4b2d94ea06f047d8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);