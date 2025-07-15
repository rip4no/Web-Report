import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.register = function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Pendaftaran berhasil!");
      window.location.href = 'index.html'; // Kembali ke login
    })
    .catch((error) => {
      alert("Pendaftaran gagal: " + error.message);
    });
};
