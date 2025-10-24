"use client";

// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbRLNa0v81d_kgGapa8ShNsIum1d2kp6M",
  authDomain: "studio-4999803674-35ed3.firebaseapp.com",
  projectId: "studio-4999803674-35ed3",
  storageBucket: "studio-4999803674-35ed3.firebasestorage.app",
  messagingSenderId: "506910699187",
  appId: "1:506910699187:web:84f7b5044728e2b872cac6"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
