// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJk6CtPrbGn1tdmUcJ04nbNdm-qEb5nkU",
    authDomain: "ema-john-simple-router-m59.firebaseapp.com",
    projectId: "ema-john-simple-router-m59",
    storageBucket: "ema-john-simple-router-m59.appspot.com",
    messagingSenderId: "243047347031",
    appId: "1:243047347031:web:c2fc73ce09228dc82a8412"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;