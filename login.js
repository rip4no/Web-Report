import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.login = function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login berhasil!");
      window.location.href = 'dashboard.html'; // Nanti bisa Anda buat
    })
    .catch((error) => {
      alert("Login gagal: " + error.message);
    });
};
