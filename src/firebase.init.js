// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR6nbtE37PtR7J6aobrnmSz3WfrrMI5JQ",
  authDomain: "ema-john-simple-11495.firebaseapp.com",
  projectId: "ema-john-simple-11495",
  storageBucket: "ema-john-simple-11495.appspot.com",
  messagingSenderId: "629051939908",
  appId: "1:629051939908:web:2cac7caf031b85d208f011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app)

export default auth;