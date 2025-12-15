// Import the Firebase SDKs 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmbEcxbeHGmdVS2fMvVS9rLsRacHbVP70",
  authDomain: "fir-v07-project.firebaseapp.com",
  projectId: "fir-v07-project",
  storageBucket: "fir-v07-project.firebasestorage.app",
  messagingSenderId: "635924698380",
  appId: "1:635924698380:web:2b0c7e4ffacd8c56b4a529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export so other scripts can use it
export { auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };
