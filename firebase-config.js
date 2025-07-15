// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBq5U_hQ8FPYEpBzYxMMO_8uXLo4lS0CZA",
    authDomain: "karyawan-835af.firebaseapp.com",
    projectId: "karyawan-835af",
    storageBucket: "karyawan-835af.appspot.com",
    messagingSenderId: "712164404160",
    appId: "1:712164404160:web:d298319fabc87987088561",
    measurementId: "G-5H7FW81VBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
