// login.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBq5U_hQ8FPYEpBzYxMMO_8uXLo4lS0CZA",
  authDomain: "karyawan-835af.firebaseapp.com",
  projectId: "karyawan-835af",
  storageBucket: "karyawan-835af.appspot.com",
  messagingSenderId: "712164404160",
  appId: "1:712164404160:web:d298319fabc87987088561"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "halaman-utama.html";
  } catch (error) {
    alert("Login gagal: " + error.message);
  }
};
