// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDrQae2gDemLSECQgrT7Cpgi3GSHUaGDsk",
  authDomain: "vectopix-7a562.firebaseapp.com",
  projectId: "vectopix-7a562",
  storageBucket: "vectopix-7a562.appspot.com",
  messagingSenderId: "428434816681",
  appId: "1:428434816681:web:3d02ac22ee79226f88f3b8",
  measurementId: "G-KB8D19S93R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);