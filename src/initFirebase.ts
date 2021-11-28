import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY as string,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN as string,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID as string,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET as string,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID as string,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL as string,
    appId: process.env.REACT_APP_FIREBASE_APP_ID as string
  };


const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export { firebase, database };
