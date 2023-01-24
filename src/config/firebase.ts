// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/storage';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6OaRolyVYXc6MDppMwZtZFc2QT7eMVBM",
  authDomain: "webshop03-5e699.firebaseapp.com",
  projectId: "webshop03-5e699",
  storageBucket: "webshop03-5e699.appspot.com",
  messagingSenderId: "869284044657",
  appId: "1:869284044657:web:3a62934b69eb7555e8a0d0",
  measurementId: "G-V74KVP3G7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const storage = getStorage(app);




