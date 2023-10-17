// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFg6f_uzItmGXWPU3RcWS08OWHGGcupDM",
  authDomain: "coffee-shop-de1df.firebaseapp.com",
  projectId: "coffee-shop-de1df",
  storageBucket: "coffee-shop-de1df.appspot.com",
  messagingSenderId: "590762476502",
  appId: "1:590762476502:web:4d3c2e28ae24c0e21c5a77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app