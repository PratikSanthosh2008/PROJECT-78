import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyD9fRV8y_paKeouofqUiQGkac6S9pwPtP8",
    authDomain: "e-rider-c1e2d.firebaseapp.com",
    projectId: "e-rider-c1e2d",
    storageBucket: "e-rider-c1e2d.appspot.com",
    messagingSenderId: "201896150547",
    appId: "1:201896150547:web:1a2a6d5d12d4441ac8a1e6"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


