import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js'
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged  } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js'
import { getFirestore,  doc, setDoc,  collection, query, where, onSnapshot, addDoc, serverTimestamp   } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyAxWAih5gM18gPilTp4ruCEcwO5Gdf-ct0",
  authDomain: "chat-44cb4.firebaseapp.com",
  projectId: "chat-44cb4",
  storageBucket: "chat-44cb4.firebasestorage.app",
  messagingSenderId: "393807764867",
  appId: "1:393807764867:web:1b87fe755778a54ccf6ab6",
  measurementId: "G-CCR5KD79BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {getAuth,  doc, setDoc,db,  collection, query, where, onSnapshot , GoogleAuthProvider,signInWithPopup, addDoc, serverTimestamp, onAuthStateChanged  }