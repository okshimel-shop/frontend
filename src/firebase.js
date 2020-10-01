import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWNFwBBj51YxKc7p-_qIaN-1nf65-ycBk",
  authDomain: "okshimel-shop-7afff.firebaseapp.com",
  databaseURL: "https://okshimel-shop-7afff.firebaseio.com",
  projectId: "okshimel-shop-7afff",
  storageBucket: "okshimel-shop-7afff.appspot.com",
  messagingSenderId: "775267974261",
  appId: "1:775267974261:web:9dfb4fb74619572ad2cc3c",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
