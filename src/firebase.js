// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAETVRcot8W1Rwvlyqya9bkuyQ2agcc38",
  authDomain: "clone-47897.firebaseapp.com",
  projectId: "clone-47897",
  storageBucket: "clone-47897.appspot.com",
  messagingSenderId: "610601273022",
  appId: "1:610601273022:web:e3a7d2f235d1f19ef600ef"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };