// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq5U_hQ8FPYEpBzYxMMO_8uXLo4lS0CZA",
  authDomain: "karyawan-835af.firebaseapp.com",
  projectId: "karyawan-835af",
  storageBucket: "karyawan-835af.firebasestorage.app",
  messagingSenderId: "712164401460",
  appId: "1:712164401460:web:d293819fabc87907008561",
  measurementId: "G-5H7FW81VBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
