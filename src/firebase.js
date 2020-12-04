import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWWC2C-KJxog_tq2-ffvNh6H2p7dEsbME",
  authDomain: "reels-f848e.firebaseapp.com",
  databaseURL: "https://reels-f848e.firebaseio.com",
  projectId: "reels-f848e",
  storageBucket: "reels-f848e.appspot.com",
  messagingSenderId: "651555116192",
  appId: "1:651555116192:web:7cf7c9ccdd1423604be5c5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
