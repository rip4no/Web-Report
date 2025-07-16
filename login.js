<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Profil Karyawan & Laporan</title>
  <script type="module">
    import { cekLogin } from "./auth-check.js";
    import { db } from "./firebase-config.js";
    import {
      doc,
      getDoc,
      collection,
      query,
      where,
      getDocs
    } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

    cekLogin(async (user) => {
      try {
        const uid = user.uid;

        // Ambil data profil
        const docRef = doc(db, "profil", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const fields = {
            namaLengkap: "Nama Lengkap",
            alamat: "Alamat",
            bpjsKes: "BPJS KES",
            bpjsKet: "BPJS KET",
            golDarah: "Gol Darah",
            idCard: "ID Card",
            jabatan: "Jabatan",
            join: "Join",
            nik: "NIK KTP",
            npwp: "NPWP",
            status: "Status",
            bio: "BIO"
          };
          Object.keys(fields).forEach(id => {
            document.getElementById(id).textContent = data[fields[id]] || "-";
          });
        } else {
          alert("Data tidak ditemukan untuk pengguna ini.");
        }

        // Ambil data laporan berdasarkan UID
        const laporanRef = collection(db, "laporan");
        const q = query(laporanRef, where("uid", "==", uid));
        const querySnapshot = await getDocs(q);

        const laporanList = document.getElementById("laporanList");
        laporanList.innerHTML = ""; // kosongkan

        if (querySnapshot.empty) {
          laporanList.innerHTML = "<li>Tidak ada laporan tersedia.</li>";
        } else {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            const item = document.createElement("li");
            item.textContent = `${data.tanggal || 'Tanpa Tanggal'} - ${data.judul || 'Tanpa Judul'}: ${data.isi || 'Tanpa Isi'}`;
            laporanList.appendChild(item);
          });
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        alert("Terjadi kesalahan saat mengambil data.");
      }
    });
  </script>
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
    }
    h1, h2 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    #profile p, #laporanList li {
      margin: 5px 0;
    }
    ul {
      padding-left: 20px;
    }
  </style>
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

  <h2>Data Laporan</h2>
  <ul id="laporanList">
    <li>Memuat laporan...</li>
  </ul>
</body>
</html>
