import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "your api",
  authDomain: "your auth domain",
  projectId: "your project id",
  storageBucket: "your storage bucket",
  messagingSenderId: "your messaging id",
  appId: "your app id",
  measurementId: "your measure id"
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const database = getAuth(app);
