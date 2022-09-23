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

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };

export default firebaseApp.firestore();
