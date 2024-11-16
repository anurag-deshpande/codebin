// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "your API key here...",
  authDomain: "auth domain here...",
  projectId: "project id here...",
  storageBucket: "storage bucket here....",
  messagingSenderId: "messagingSenderId here....",
  appId: "app id here..."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
