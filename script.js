function ucapan() {
  const nama = prompt("Masukkan nama Anda:");
  const pesan = prompt("Tulis ucapan untuk pengantin:");

  if (nama && pesan) {
    alert(`Terima kasih, ${nama}!\nUcapanmu: "${pesan}"\n😊`);
  } else {
    alert("Ucapan batal dikirim. Silakan coba lagi.");
  }
}
