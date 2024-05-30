
import { initializeApp  } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
import 'firebase/compat/database'
import "firebase/compat/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAyqX2khJfW8MFHAtjjbAVM4BV5xdBZYu8",
  authDomain: "visma-528ae.firebaseapp.com",
  projectId: "visma-528ae",
  storageBucket: "visma-528ae.appspot.com",
  messagingSenderId: "781876746139",
  appId: "1:781876746139:web:3ad233060a4f5bea9ab33e",
  measurementId: "G-M8P4WFYFBW"
};





const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)