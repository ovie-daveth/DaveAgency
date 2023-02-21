// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYhYH3I9J2XA485vtXNBIrn1nD0q0vET4",
  authDomain: "daveagency-1.firebaseapp.com",
  projectId: "daveagency-1",
  storageBucket: "daveagency-1.appspot.com",
  messagingSenderId: "57077958023",
  appId: "1:57077958023:web:cf21cd9196784b02447f22",
  measurementId: "G-CW54Q3Y2KS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);