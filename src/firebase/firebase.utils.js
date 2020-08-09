import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const CONFIG = {
  apiKey: "AIzaSyCF-9lVsSkFkShXGAvLEndYYiDpp-nTq08",
  authDomain: "ecommerce-a47dc.firebaseapp.com",
  databaseURL: "https://ecommerce-a47dc.firebaseio.com",
  projectId: "ecommerce-a47dc",
  storageBucket: "ecommerce-a47dc.appspot.com",
  messagingSenderId: "894824955295",
  appId: "1:894824955295:web:75a33d7fa46c9feb0391aa",
  measurementId: "G-W7S9CL67NN",
};

firebase.initializeApp(CONFIG);
export const FIREBASE_AUTH = firebase.auth();
export const FIREBASE_STORE = firebase.firestore();
const GOOGLE_AUTH_PROVIDER = new firebase.auth.GoogleAuthProvider();
GOOGLE_AUTH_PROVIDER.setCustomParameters({ prompt: "select_account" });
export const SIGN_IN_WITH_GOOGLE = () =>
  FIREBASE_AUTH.signInWithPopup(GOOGLE_AUTH_PROVIDER);

export default firebase;
