// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWQkk1uS_qfkJvrmLRQOZ0BYQ5mdwW_co",
  authDomain: "abhi-login-45b61.firebaseapp.com",
  projectId: "abhi-login-45b61",
  storageBucket: "abhi-login-45b61.appspot.com",
  messagingSenderId: "114221738132",
  appId: "1:114221738132:web:ea274f129d457087fdec81",
  measurementId: "G-0XNPJCER00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();