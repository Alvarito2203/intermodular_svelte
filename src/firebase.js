import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAhBVcKGTJ8jMlAD0O0Ye_RumtYzgV74Lc",
    authDomain: "proyecto-svelte-73d7b.firebaseapp.com",
    projectId: "proyecto-svelte-73d7b",
    storageBucket: "proyecto-svelte-73d7b.firebasestorage.app",
    messagingSenderId: "582378285109",
    appId: "1:582378285109:web:11719f0f7c7c0aa3d5e97c"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);