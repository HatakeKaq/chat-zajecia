// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiJpcKFncXncpZaxyCdDoG2OWjGeRo05I",
  authDomain: "zajecia-chat-react.firebaseapp.com",
  projectId: "zajecia-chat-react",
  storageBucket: "zajecia-chat-react.appspot.com",
  messagingSenderId: "242072630212",
  appId: "1:242072630212:web:87cd095bdef64a49faaa91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage=getStorage();
export const db = getFirestore(app);
