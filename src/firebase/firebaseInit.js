import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjm5UYJYUrAnAzCmHpVNvrIYpXkMIY39s",
  authDomain: "fireblog-backend.firebaseapp.com",
  projectId: "fireblog-backend",
  storageBucket: "fireblog-backend.appspot.com",
  messagingSenderId: "827407635082",
  appId: "1:827407635082:web:68798782fda91845f4d373",
};

let timestamp;
let firebaseApp;
let db;

export const initializeFirebase = () => {
  firebaseApp = firebase.initializeApp(firebaseConfig);
  timestamp = firebase.firestore.FieldValue.serverTimestamp;
  db = firebaseApp.firestore();
};

export { timestamp };

export default db;
