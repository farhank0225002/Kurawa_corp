document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");
    const notaCard = document.getElementById("notaCard");
    const downloadButton = document.getElementById("downloadButton");
  
    orderForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nama = document.getElementById("nama").value;
      const tanggalElement = document.getElementById("tanggal");
      const tanggal = new Date(tanggalElement.value);
      const bulan = tanggal.toLocaleString("default", { month: "long" }); // Mengambil nama bulan dari tanggal
      const tahun = tanggal.getFullYear(); // Mengambil tahun dari tanggal
      const jumlah = document.getElementById("jumlah").value;
      const jenisKain = document.querySelector('input[name="jenisKain"]:checked').value;
      const namaKaos = document.getElementById("namaKaos").value;
      const nomorHp = document.getElementById("nomorHp").value;
  
      document.getElementById("cardNama").textContent = nama;
      document.getElementById("cardTanggal").textContent = `${tanggal.getDate()} ${bulan} ${tahun}`;
      document.getElementById("cardJumlah").textContent = jumlah;
      document.getElementById("cardJenisKain").textContent = jenisKain;
      document.getElementById("cardNamaKaos").textContent = namaKaos;
      document.getElementById("cardNomorHp").textContent = nomorHp;
  
      notaCard.style.display = "block";
      html2canvas(notaCard).then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg");
        downloadButton.style.display = "block";
        downloadButton.onclick = function () {
          const a = document.createElement("a");
          a.href = imgData;
          a.download = `${nama}_nota_pesanan.jpg`;
          a.click();
        };
      });
    });
  });
  