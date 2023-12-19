// Soal Pertama
let saldoAwal = prompt('Masukkan Saldo Awal : ');
let saldoTambahan = prompt('Masukkan Saldo Tambahan : ');

saldoAwal = parseFloat(saldoAwal);
saldoTambahan = parseFloat(saldoTambahan);

const saldoAkhir = saldoAwal + saldoTambahan;

console.log(`Saldo akhir anda adalah : ${saldoAkhir}`)

// Soal Kedua
var hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
let indexHari = new Date().getDay();
console.log (`Hari ini merupakan hari ${hari[indexHari]}`);
