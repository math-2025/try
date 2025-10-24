"use client";

// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL7WCyXuYTqteEDUoSB3S79akpGU6XstA",
  authDomain: "studio-461864257-d9b57.firebaseapp.com",
  projectId: "studio-461864257-d9b57",
  storageBucket: "studio-461864257-d9b57.firebasestorage.app",
  messagingSenderId: "952093304826",
  appId: "1:952093304826:web:c208c1c171f524fac1e643"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
