  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'  // older db

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtonIybwI8rPXYNmVi4kcOKhlT-9oqUyQ",
  authDomain: "messenger-9a39d.firebaseapp.com",
  projectId: "messenger-9a39d",
  storageBucket: "messenger-9a39d.appspot.com",
  messagingSenderId: "110172397430",
  appId: "1:110172397430:web:75de7e095e459d130e6457"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


const db = app.firestore()  // to query, fetch data and make changes 
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider() // to sign up with google.
const storage = firebase.storage().ref('images')  // stored in folder 'images'. 
const audio = firebase.storage().ref('audios')  // any time we upload img/audio we'll be using this reference 
const createTimeStamp = firebase.firestore.FieldValue.serverTimestamp // seems to be like an ID
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP

export {
    db,
    auth,
    provider,
    storage,
    audio,
    createTimeStamp,
    serverTimestamp,
}