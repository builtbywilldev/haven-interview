// Import the functions you need from the SDKs you need
import { getAuth } from "firebase-admin/auth";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDm76HW4fM8kPJld4Afx_7T_BHoRpKC5lQ",
  authDomain: "havenprep-750c4.firebaseapp.com",
  projectId: "havenprep-750c4",
  storageBucket: "havenprep-750c4.firebasestorage.app",
  messagingSenderId: "598097029606",
  appId: "1:598097029606:web:ed802dcfda088f0a1f8e27"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)