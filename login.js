import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.login = function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login berhasil!");
            // Redirect setelah login
            window.location.href = "halaman-utama.html"; // Ganti sesuai halaman utama Anda
        })
        .catch((error) => {
            alert("Login gagal: " + error.message);
        });
};
