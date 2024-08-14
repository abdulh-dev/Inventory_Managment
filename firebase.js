// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "---",
  authDomain: "inventory-management-cd30b.firebaseapp.com",
  projectId: "inventory-management-cd30b",
  storageBucket: "inventory-management-cd30b.appspot.com",
  messagingSenderId: "836864670304",
  appId: "1:836864670304:web:90b8e977b32f194d8be105",
  measurementId: "G-HX0969LQGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}
