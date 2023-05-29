// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';
import "firebase/database";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const authService = getAuth(firebaseApp);
export const dbService = getFirestore();

export default firebaseApp;
/**
 * reference : https://sukvvon.tistory.com/75 ,
  https://nomadcoders.co/nwitter/lectures/1908/issues/1792
 */

