// data/organisasi.js

import iconorganisasi from '../assets/iconorganisasi.png';
import organisasi1 from '../assets/organisasi1.png';
import tanggapan from '../assets/tanggapan.png';
import diskusi from '../assets/diskusi.png';

export const organisasi = [
  {
    id: 1,
    nama: 'Yayasan Hutan, Alam dan Lingkungan Aceh',
    lokasi: 'Aceh',
    jenis: 'Artikel Edukasi',
    proyek: 2,
    relawan: 4,
    jamKerja: 2,
    tanggalBerdiri: 'Tanggal Berdiri: 1 Januari 2000',
    email: 'emailorganisasi@example.com',
    noTelepon: '08123456789',
    icon: iconorganisasi,
  },
  {
    id: 2,
    nama: 'Yayasan Sinar Tani Indonesia (Sintesa)',
    lokasi: 'Sumatera Utara',
    jenis: 'Diskusi',
    proyek: 1,
    relawan: 3,
    jamKerja: 3,
    tanggalBerdiri: 'Tanggal Berdiri: 15 Februari 1995',
    email: 'sintesa@example.com',
    noTelepon: '087654321',
    icon: tanggapan,
  },
  {
    id: 3,
    nama: 'Yayasan Pendidikan Anak Bangsa (YPAB)',
    lokasi: 'Jakarta',
    jenis: 'Pendidikan',
    proyek: 3,
    relawan: 6,
    jamKerja: 4,
    tanggalBerdiri: 'Tanggal Berdiri: 10 Mei 1980',
    email: 'ypab@example.com',
    noTelepon: '08987654321',
    icon: organisasi1,
  },
  {
    id: 4,
    nama: 'Lembaga Bantuan Sosial Cinta Kasih (LBCK)',
    lokasi: 'Surabaya',
    jenis: 'Sosial',
    proyek: 2,
    relawan: 5,
    jamKerja: 2,
    tanggalBerdiri: 'Tanggal Berdiri: 20 November 1992',
    email: 'lbck@example.com',
    noTelepon: '08543210987',
    icon: diskusi,
  },
];
