const STORAGE_KEY = "DATA_PESERTA_FULL_V3";

document.addEventListener("DOMContentLoaded", () => {
  const formRegistrasi = document.getElementById("formRegistrasi");
  if (formRegistrasi) {
    formRegistrasi.addEventListener("submit", prosesRegistrasi);
  }
  const tableBody = document.getElementById("tableBody");
  if (tableBody) {
    renderTabelPeserta();
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.addEventListener("keyup", filterTabel);
  }
  const formKegiatan = document.getElementById("formKegiatan");
  if (formKegiatan) {
    formKegiatan.addEventListener("submit", simpanKegiatanUI);
  }
});

function prosesRegistrasi(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const tempat = document.getElementById("tempatLahir").value;
  const tglLahir = document.getElementById("tanggalLahir").value;
  const email = document.getElementById("email").value;
  const kategori = document.getElementById("statusPeserta").value;

  const genderEl = document.querySelector('input[name="gender"]:checked');
  const gender = genderEl ? genderEl.value : "Laki-Laki";

  if (!kategori) {
    alert("Pilih kategori peserta!");
    return;
  }

  const dataBaru = {
    id: Date.now(),
    tglDaftar: new Date().toISOString().split("T")[0],
    nama: nama,
    tempat: tempat || "-",
    tglLahir: tglLahir || "-",
    gender: gender,
    email: email,
    kategori: kategori,
  };

  let listPeserta = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  listPeserta.push(dataBaru);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(listPeserta));

  alert("Registrasi Berhasil! Data tersimpan.");
  window.location.href = "../data/data.html";
}

function renderTabelPeserta() {
  const tableBody = document.getElementById("tableBody");
  const emptyMsg = document.getElementById("emptyMessage");
  let list = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  tableBody.innerHTML = "";

  if (list.length === 0) {
    if (emptyMsg) emptyMsg.style.display = "block";
    return;
  }
  if (emptyMsg) emptyMsg.style.display = "none";

  list
    .slice()
    .reverse()
    .forEach((item, index) => {
      let badgeColor = "bg-secondary";
      if (item.kategori === "Mahasiswa") badgeColor = "bg-info text-dark";
      if (item.kategori === "VIP") badgeColor = "bg-warning text-dark";
      if (item.kategori === "Umum") badgeColor = "bg-primary";

      const row = `
          <tr>
              <td>${index + 1}</td>
              <td class="text-muted small">${item.tglDaftar}</td>
              <td class="fw-bold text-start">${item.nama}</td>
              <td>${item.gender}</td>
              <td class="text-start text-primary small">${item.email}</td>
              <td><span class="badge ${badgeColor} rounded-pill">${
        item.kategori
      }</span></td>
              <td><span class="badge bg-success-subtle text-success">Confirmed</span></td>
              <td>
                  <button class="btn btn-sm btn-light border" onclick="hapusData(${
                    item.id
                  })">
                    <i class="bi bi-trash text-danger"></i>
                  </button>
              </td>
          </tr>
      `;
      tableBody.insertAdjacentHTML("beforeend", row);
    });
}

function hapusData(id) {
  if (!confirm("Hapus data ini?")) return;
  let list = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  list = list.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  renderTabelPeserta();
}

function filterTabel() {
  const filter = document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll("#tableBody tr").forEach((row) => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(filter) ? "" : "none";
  });
}

function simpanKegiatanUI(e) {
  e.preventDefault();
  const kode = document.getElementById("kode").value;
  const nama = document.getElementById("namaKegiatan").value;
  const tglMulai = document.getElementById("tglMulai").value;
  const tglAkhir = document.getElementById("tglAkhir").value;
  const biaya = document.getElementById("biaya").value;
  const tempat = document.getElementById("tempat").value;
  const jenis = document.getElementById("jenisKegiatan").value;
  const pic = document.getElementById("pic").value;
  const deskripsi = document.getElementById("deskripsi").value;

  if (jenis === "" || jenis === "Select") {
    alert("Silakan pilih Jenis Kegiatan!");
    return;
  }

  const biayaFmt = biaya
    ? new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(biaya)
    : "Gratis";

  const html = `
    <div class="col-md-6 fade-in-card">
      <div class="card h-100 shadow-sm border-0 border-start border-4 border-primary">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <div>
                <span class="badge bg-light text-dark border mb-1">${
                  kode || "No Code"
                }</span>
                <h5 class="fw-bold text-primary mb-0">${nama}</h5>
            </div>
            <span class="badge bg-primary-subtle text-primary border border-primary-subtle">${jenis}</span>
          </div>
          
          <p class="text-muted small mb-2">
            <i class="bi bi-calendar-event me-1"></i> ${tglMulai} s/d ${tglAkhir}
          </p>
          
          <div class="small mb-2">
            <div><strong>PIC:</strong> ${pic || "-"}</div>
            <div><strong>Tempat:</strong> ${tempat || "-"}</div>
            <div class="text-success fw-bold mt-1">${biayaFmt}</div>
          </div>
          
          <p class="small text-muted border-top pt-2 fst-italic text-truncate">
            "${deskripsi || "Tidak ada deskripsi"}"
          </p>
        </div>
      </div>
    </div>
  `;

  const empty = document.getElementById("emptyState");
  if (empty) empty.style.display = "none";

  document
    .getElementById("kegiatanContainer")
    .insertAdjacentHTML("beforeend", html);

  e.target.reset();
  alert("Kegiatan berhasil disimpan!");
}
