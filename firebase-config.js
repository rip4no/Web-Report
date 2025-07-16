// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBq5U_hQ8FPYEpBzYxMMO_8uXLo4lS0CZA",
  authDomain: "karyawan-835af.firebaseapp.com",
  projectId: "karyawan-835af",
  storageBucket: "karyawan-835af.appspot.com", // ✅ sudah diperbaiki
  messagingSenderId: "712164401460",
  appId: "1:712164401460:web:d293819fabc87907008561",
  measurementId: "G-5H7FW81VBM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
