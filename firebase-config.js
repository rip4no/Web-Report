// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Konfigurasi Firebase kamu (dari SDK)
const firebaseConfig = {
  apiKey: "AIzaSyBq5U_hQ8FPYEpBzYxMMO_8uXLo4lS0CZA",
  authDomain: "karyawan-835af.firebaseapp.com",
  projectId: "karyawan-835af",
  storageBucket: "karyawan-835af.firebasestorage.app",
  messagingSenderId: "712164401460",
  appId: "1:712164401460:web:d293819fabc87907008561",
  measurementId: "G-5H7FW81VBM"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Auth dan Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export supaya bisa dipakai file lain
export { auth, db };
