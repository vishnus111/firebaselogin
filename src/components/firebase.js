// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3WR3s2ULyr27-ECjp6ClfhgS4VfRgtuk",
  authDomain: "samplelogin-accbf.firebaseapp.com",
  projectId: "samplelogin-accbf",
  storageBucket: "samplelogin-accbf.firebasestorage.app",
  messagingSenderId: "726015291826",
  appId: "1:726015291826:web:59e9143b9994443161b4ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;