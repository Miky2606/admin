// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBA_Am3SBfoTq1P1V7vY-siyYHGG9pD2C4",
  authDomain: "anime-store-cd3bf.firebaseapp.com",
  projectId: "anime-store-cd3bf",
  storageBucket: "anime-store-cd3bf.appspot.com",
  messagingSenderId: "229777796020",
  appId: "1:229777796020:web:acf91cc6c86c67a1d4a0e1",
  measurementId: "G-DM87EFHTGT",
};

// Initialize Firebase
export const app =
  getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore();
