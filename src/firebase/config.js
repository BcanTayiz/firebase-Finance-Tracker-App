
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBGyUjKHXOIxVweTWSjgS8-roXI9qrzdms",
  authDomain: "expense-tracker-ninja.firebaseapp.com",
  projectId: "expense-tracker-ninja",
  storageBucket: "expense-tracker-ninja.appspot.com",
  messagingSenderId: "1058425634229",
  appId: "1:1058425634229:web:a06846ffcd6c957df4adfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// init 
const db = getFirestore()

// auth
const auth = getAuth()

export {db, auth}