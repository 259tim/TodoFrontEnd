import firebase from 'firebase'

// very important for Expo & Firebase: This is the web method of initializing, not the Android method
// Firebase offers two different ways of doing this, and the Android way doesn't work with Expo.

const firebaseConfig = {
    apiKey: "AIzaSyAJTxnMZ6temZTG2halECIem5I2zkvSUhI",
    authDomain: "quick-scan-3da54.firebaseapp.com",
    projectId: "quick-scan-3da54",
    storageBucket: "quick-scan-3da54.appspot.com",
    messagingSenderId: "692882056880",
    appId: "1:692882056880:web:892440850ac1dcbf533d75",
    measurementId: "G-LMLBS2HPX3"
  };


// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase