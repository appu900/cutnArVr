// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE-FsdoAEOn5dJREFeX5rFhQ5FeegSf2w",
  authDomain: "cutm-arvr.firebaseapp.com",
  projectId: "cutm-arvr",
  storageBucket: "cutm-arvr.appspot.com",
  messagingSenderId: "653166320028",
  appId: "1:653166320028:web:fbc2c4e3547ccdd40fd059",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

