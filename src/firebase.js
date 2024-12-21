// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCABB8nNadEcaA3OPzYs2oz8RbpYav5opE",
  authDomain: "dashboard-4c24f.firebaseapp.com",
  projectId: "dashboard-4c24f",
  storageBucket: "dashboard-4c24f.appspot.com",
  messagingSenderId: "908699037540",
  appId: "1:908699037540:web:d9a2c71b987eeb76b0d471",
  measurementId: "G-9ZG6113LT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);
export const storage = getStorage(app);
