import firebase from "firebase/app";
import "firebase/storage"; // <----

const firebaseConfig = {
  apiKey: "AIzaSyA2M6OVsuT40sPSOqbTV82JHCUThgKDMmo",
  authDomain: "azfarul-matin-edffb.firebaseapp.com",
  projectId: "azfarul-matin-edffb",
  storageBucket: "azfarul-matin-edffb.appspot.com",
  messagingSenderId: "276386761285",
  appId: "1:276386761285:web:64b1f110ba164ff89f312c",
  measurementId: "G-FD2B3HEXN5",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
