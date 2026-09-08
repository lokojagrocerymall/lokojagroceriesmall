// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, where, updateDoc, doc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// YOUR CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyChrVZh6NUm7N5W7FMXnxztmU7NXRYrVa0",
  authDomain: "lokoja-grocery-mall.firebaseapp.com",
  projectId: "lokoja-grocery-mall",
  storageBucket: "lokoja-grocery-mall.firebasestorage.app",
  messagingSenderId: "642467126038",
  appId: "1:642467126038:web:420d7c0e33119b7fa24e37"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { createUserWithEmailAndPassword, collection, addDoc, getDocs, query, where, updateDoc, doc, serverTimestamp };
