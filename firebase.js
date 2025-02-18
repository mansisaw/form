// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB2ieiVYIKjcRhDPwG4B1Foi8KxX3Q3qp0",
    authDomain: "form-2750c.firebaseapp.com",
    projectId: "form-2750c",
    storageBucket: "form-2750c.firebasestorage.app",
    messagingSenderId: "823231579116",
    appId: "1:823231579116:web:acef5447b3fd0cc581b6c9",
    measurementId: "G-WDWDB8CZJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);