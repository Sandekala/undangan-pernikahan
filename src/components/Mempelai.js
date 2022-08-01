import React, { useEffect } from 'react';

const Mempelai = ({ pria, wanita, tahun, bulan, tanggal, jam, menit }) => {
  const H = new Date(tahun, bulan, tanggal, jam, menit);
  let day;
  let bln;
  switch (H.getDay()) {
    case 0:
      day = 'Minggu';
      break;
    case 1:
      day = 'Senin';
      break;
    case 2:
      day = 'Selasa';
      break;
    case 3:
      day = 'Rabu';
      break;
    case 4:
      day = 'Kamis';
      break;
    case 5:
      day = "Jum'at";
      break;
    case 6:
      day = 'Sabtu';
  }
  switch (H.getMonth()) {
    case 0:
      bln = 'Januari';
      break;
    case 1:
      bln = 'Februari';
      break;
    case 2:
      bln = 'Maret';
      break;
    case 3:
      bln = 'April';
      break;
    case 4:
      bln = 'Mei';
      break;
    case 5:
      bln = 'Juni';
      break;
    case 6:
      bln = 'Juli';
      break;
    case 7:
      bln = 'Agustus';
      break;
    case 8:
      bln = 'September';
      break;
    case 9:
      bln = 'Oktober';
      break;
    case 10:
      bln = 'November';
      break;
    case 11:
      bln = 'Desember';
      break;
  }
  const thn = H.getFullYear();
  // Memperbarui hitungan mundur setiap 1 detik
  useEffect(() => {
    const hariH = H.getTime();
    const x = setInterval(function () {
      // Untuk mendapatkan tanggal dan waktu hari ini
      const now = new Date().getTime();

      // Temukan jarak antara sekarang dan tanggal hitung mundur
      const distance = hariH - now;

      // Perhitungan waktu untuk hari, jam, menit dan detik
      const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
      const jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const detik = Math.floor((distance % (1000 * 60)) / 1000);

      // Keluarkan hasil dalam elemen dengan id = "demo"
      document.getElementById('hari').innerText = hari;
      document.getElementById('jam').innerText = jam;
      document.getElementById('menit').innerText = menit;
      document.getElementById('detik').innerText = detik;

      if (distance < 1000) {
        clearInterval(x);
      }
    }, 1000);
    return () => {
      clearInterval(x);
    };
  }, []);

  return (
    <>
      <h2 className="mt-10 font-GreatVibes text-5xl font-extrabold">
        {pria} &amp; {wanita}
      </h2>
      <p className="mt-5 text-2xl font-bold">
        {day}, {H.getDate()} {bln} {thn}
      </p>
      <div id="countDown" className="mt-9 flex w-full flex-row flex-wrap justify-center gap-7">
        <div className="w-16 rounded-md bg-primary p-2 text-secondary shadow-md shadow-white">
          <div id="hari" className="text-2xl"></div>
          <p>Hari</p>
        </div>
        <div className="w-16 rounded-md bg-primary p-2 text-secondary shadow-md shadow-white">
          <div id="jam" className="text-2xl"></div>
          <p>Jam</p>
        </div>
        <div className="w-16 rounded-md bg-primary p-2 text-secondary shadow-md shadow-white">
          <div id="menit" className="text-2xl"></div>
          <p>Menit</p>
        </div>
        <div className="w-16 rounded-md bg-primary p-2 text-secondary shadow-md shadow-white">
          <div id="detik" className="text-2xl"></div>
          <p>Detik</p>
        </div>
      </div>
    </>
  );
};

export default Mempelai;
