// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBizMhimxBHeor_bG9VHj6CByEsq-zEl6A",
    authDomain: "uniformextratime.firebaseapp.com",
    projectId: "uniformextratime",
    storageBucket: "uniformextratime.appspot.com",
    messagingSenderId: "896332417752",
    appId: "1:896332417752:web:887d0412015bda581f25ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);