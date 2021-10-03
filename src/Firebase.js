import React from 'react'
import firebase from './Firebase';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDGmB7lNSoAEn56AiWMfYh0i6g5ibfnuLw",
    authDomain: "riteshdemo-bacad.firebaseapp.com",
    databaseURL: "https://riteshdemo-bacad-default-rtdb.firebaseio.com",
    projectId: "riteshdemo-bacad",
    storageBucket: "riteshdemo-bacad.appspot.com",
    messagingSenderId: "706062652683",
    appId: "1:706062652683:web:2249d702879e00e762be0e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase;

