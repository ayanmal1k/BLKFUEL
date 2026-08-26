import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMf7TIRHP0OzASfxMXjbg6ra3No9LcFYg",
  authDomain: "admiral-1a377.firebaseapp.com",
  projectId: "admiral-1a377",
  storageBucket: "admiral-1a377.firebasestorage.app",
  messagingSenderId: "175933062112",
  appId: "1:175933062112:web:e2975beba5c209297e8985"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
