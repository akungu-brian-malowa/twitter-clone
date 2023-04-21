// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAYwYR99Bda-GNCKsbe8TWBVboG3ctwjaE",

  authDomain: "twiter-fe763.firebaseapp.com",

  projectId: "twiter-fe763",

  storageBucket: "twiter-fe763.appspot.com",

  messagingSenderId: "739132042006",

  appId: "1:739132042006:web:f4a94f8259ff9859607e37",

  measurementId: "G-49M1RT2YNS"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

/// Initialize Realtime Database
export const db = getDatabase(app);
export const auth = getAuth(app);
