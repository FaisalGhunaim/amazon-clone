import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDEFrCQwyAPOj497bEWH5NLgHIN0SVbv9U",
  authDomain: "clone-a68fc.firebaseapp.com",
  projectId: "clone-a68fc",
  storageBucket: "clone-a68fc.appspot.com",
  messagingSenderId: "547536399481",
  appId: "1:547536399481:web:a7ec84004e12ebd89fb8a8",
  measurementId: "G-3B7YX8DB8Y",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
 