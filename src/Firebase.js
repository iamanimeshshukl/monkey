import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBUvP6w0uGBnxJLZ1xwyZvDHPgxymWVcrs",
  authDomain: "monkey-588de.firebaseapp.com",
  projectId: "monkey-588de",
  storageBucket: "monkey-588de.appspot.com",
  messagingSenderId: "490814481077",
  appId: "1:490814481077:web:110a721902c534e58a94fc",
  measurementId: "G-HTD66Z8ZGJ"
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const database = getAuth(app);