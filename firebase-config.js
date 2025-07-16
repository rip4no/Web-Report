<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Profil Karyawan</title>
  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
    import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
    import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

    const firebaseConfig = {
      apiKey: "AIzaSyBq5U_hQ8FPYEpBzYxMMO_8uXLo4lS0CZA",
      authDomain: "karyawan-835af.firebaseapp.com",
      projectId: "karyawan-835af",
      storageBucket: "karyawan-835af.appspot.com",
      messagingSenderId: "712164404160",
      appId: "1:712164404160:web:d298319fabc87987088561",
      measurementId: "G-5H7FW81VBM"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const docRef = doc(db, "profil", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          document.getElementById("namaLengkap").textContent = data["Nama Lengkap"] || "";
          document.getElementById("alamat").textContent = data["Alamat"] || "";
          document.getElementById("bpjsKes").textContent = data["BPJS KES"] || "";
          document.getElementById("bpjsKet").textContent = data["BPJS KET"] || "";
          document.getElementById("golDarah").textContent = data["Gol Darah"] || "";
          document.getElementById("idCard").textContent = data["ID Card"] || "";
          document.getElementById("jabatan").textContent = data["Jabatan"] || "";
          document.getElementById("join").textContent = data["Join"] || "";
          document.getElementById("nik").textContent = data["NIK KTP"] || "";
          document.getElementById("npwp").textContent = data["NPWP"] || "";
          document.getElementById("status").textContent = data["Status"] || "";
          document.getElementById("bio").textContent = data["BIO"] || "";
        } else {
          alert("Data tidak ditemukan.");
        }
      } else {
        alert("Silakan login terlebih dahulu.");
        window.location.href = "/login.html";
      }
    });
  </script>
</head>
<body>
  <h1>Profil Karyawan</h1>
  <div id="profile">
    <p><strong>Nama Lengkap:</strong> <span id="namaLengkap"></span></p>
    <p><strong>Alamat:</strong> <span id="alamat"></span></p>
    <p><strong>BPJS KES:</strong> <span id="bpjsKes"></span></p>
    <p><strong>BPJS KET:</strong> <span id="bpjsKet"></span></p>
    <p><strong>Golongan Darah:</strong> <span id="golDarah"></span></p>
    <p><strong>ID Card:</strong> <span id="idCard"></span></p>
    <p><strong>Jabatan:</strong> <span id="jabatan"></span></p>
    <p><strong>Tanggal Masuk:</strong> <span id="join"></span></p>
    <p><strong>NIK KTP:</strong> <span id="nik"></span></p>
    <p><strong>NPWP:</strong> <span id="npwp"></span></p>
    <p><strong>Status:</strong> <span id="status"></span></p>
    <p><strong>BIO:</strong> <span id="bio"></span></p>
  </div>
</body>
</html>
