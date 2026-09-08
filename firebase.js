// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyChrVZh6NUm7N5W7FMXnxztmU7NXRYr...", // paste your FULL new key here
  authDomain: "lokoja-grocery-mall.firebaseapp.com",
  projectId: "lokoja-grocery-mall",
  storageBucket: "lokoja-grocery-mall.firebasestorage.app",
  messagingSenderId: "642467126038",
  appId: "1:642467126038:web:420d7c0e33119b7fa24e37"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
