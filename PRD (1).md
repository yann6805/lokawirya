# Product Requirements Document (PRD)
## Lokawirya — Platform Pencocokan UMKM dan Tenaga Terampil Lokal Berbasis AI

**Versi Dokumen:** 1.0
**Status:** Draft untuk Business Plan Competition (BPC) GBK — SB-IPB
**Tim:** Geng Beban Keluarga (GBK)

---

## 1. Ringkasan Eksekutif

Lokawirya adalah platform digital berbasis kecerdasan buatan (AI) yang mempertemukan kebutuhan Usaha Mikro, Kecil, dan Menengah (UMKM) dengan tenaga terampil lokal. Sistem pencocokan (matching) bekerja berdasarkan tiga variabel utama: keahlian, lokasi, dan pengalaman kerja. Tujuannya adalah mempermudah UMKM menemukan tenaga kerja yang sesuai kebutuhan, sekaligus membuka akses peluang proyek bagi tenaga terampil di wilayah sekitar mereka.

Nama "Lokawirya" berasal dari gabungan makna lokal dan kerja/usaha, mencerminkan misi platform untuk memperkuat ekosistem ekonomi lokal melalui pemanfaatan tenaga kerja terampil di sekitar wilayah UMKM beroperasi.

---

## 2. Latar Belakang dan Permasalahan

### 2.1 Masalah yang Dihadapi UMKM
- Kesulitan menemukan tenaga terampil (desain, fotografi, pemasaran digital, dan kebutuhan operasional lain) yang sesuai dengan kebutuhan dan anggaran.
- Proses pencarian tenaga kerja lepas saat ini sebagian besar masih informal, mengandalkan relasi pribadi atau grup komunitas tanpa sistem verifikasi yang jelas.
- Minimnya transparansi kualitas dan rekam jejak tenaga kerja yang akan direkrut.

### 2.2 Masalah yang Dihadapi Tenaga Terampil Lokal
- Akses pasar yang terbatas, terutama bagi tenaga kerja yang berada di luar pusat kota.
- Kesulitan menemukan proyek yang sesuai dengan keahlian spesifik yang dimiliki.
- Tidak ada sistem yang menghubungkan mereka secara efisien dengan UMKM yang membutuhkan jasa di wilayah sekitar.

### 2.3 Peluang
Kombinasi teknologi AI matching dengan basis data lokal (komunitas, perangkat desa, lembaga pelatihan) memungkinkan Lokawirya menjadi penghubung yang lebih relevan dan terpercaya dibanding platform freelance umum, karena berfokus pada kedekatan lokasi dan validasi komunitas.

---

## 3. Tujuan Produk

1. Membangun sistem pencocokan berbasis AI yang merekomendasikan tenaga terampil paling relevan untuk kebutuhan UMKM.
2. Menyediakan proses verifikasi profil, sertifikat, dan portofolio tenaga terampil untuk membangun kepercayaan.
3. Menyediakan kanal transaksi dan sistem rating/review yang transparan.
4. Memperluas akses pasar tenaga kerja lokal di luar jaringan personal mereka.
5. Menjadi model bisnis berkelanjutan melalui biaya transaksi, sponsorship, dan fitur premium.

### 3.1 Tujuan Non-Fungsional
- Prototipe harus dapat didemonstrasikan secara end-to-end untuk keperluan presentasi BPC.
- Antarmuka harus mencerminkan identitas visual yang profesional dan modern (lihat `desain.md`).
- Arsitektur harus sederhana namun dapat dikembangkan lebih lanjut (scalable) pasca-kompetisi.

---

## 4. Target Pengguna (Segmentasi)

### 4.1 UMKM Lokal
- Membutuhkan jasa tenaga terampil (desain, fotografi, pemasaran digital, dan lainnya).
- Ingin mengembangkan dan meningkatkan kualitas bisnis.
- Mencari tenaga kerja yang sesuai kebutuhan dan anggaran.

### 4.2 Tenaga Terampil Lokal
- Memiliki keahlian tertentu dan ingin mendapatkan proyek.
- Membutuhkan akses pasar yang lebih luas.
- Mengutamakan proyek yang berada di wilayah sekitar tempat tinggal.

---

## 5. Persona Pengguna

### Persona 1 — Pemilik UMKM
- **Nama:** Ibu Sri, 38 tahun
- **Profil:** Pemilik usaha kuliner rumahan yang ingin meningkatkan pemasaran digital tetapi tidak memiliki tim internal.
- **Kebutuhan:** Menemukan desainer konten dan fotografer produk dengan biaya terjangkau, di sekitar wilayahnya.
- **Hambatan saat ini:** Tidak tahu harus mencari ke mana, khawatir kualitas tidak sesuai ekspektasi.

### Persona 2 — Tenaga Terampil Lokal
- **Nama:** Rangga, 24 tahun
- **Profil:** Freelancer desain grafis dan fotografi, tinggal di wilayah kabupaten.
- **Kebutuhan:** Mendapatkan proyek yang konsisten tanpa harus bersaing di platform freelance nasional yang didominasi tenaga kerja kota besar.
- **Hambatan saat ini:** Minim eksposur, portofolio belum terverifikasi secara formal.

---

## 6. Proposisi Nilai (Value Proposition)

Lokawirya berbasis AI dibuat untuk mencocokkan kebutuhan UMKM dengan tenaga terampil lokal berdasarkan keahlian, lokasi, dan pengalaman. Hal ini memudahkan UMKM menemukan tenaga yang sesuai, sekaligus membuka peluang proyek bagi tenaga terampil di wilayah sekitar.

---

## 7. Ruang Lingkup Fitur (Fitur MVP untuk Prototipe)

### 7.1 Onboarding dan Autentikasi
- Registrasi dan login untuk dua peran pengguna: UMKM dan Tenaga Terampil.
- Formulir onboarding: data usaha (untuk UMKM) atau data keahlian, sertifikat, dan portofolio (untuk Tenaga Terampil).

### 7.2 AI Matching
- Sistem rekomendasi tenaga terampil berdasarkan input kebutuhan UMKM (jenis jasa, lokasi, anggaran).
- Skor kecocokan (match score) ditampilkan pada setiap rekomendasi.
- Filter manual tambahan: lokasi, kategori keahlian, rentang harga, rating.

### 7.3 Profil dan Verifikasi
- Halaman profil tenaga terampil menampilkan: keahlian, lokasi, pengalaman, portofolio, sertifikat, dan rating.
- Status verifikasi (terverifikasi/belum) ditampilkan sebagai badge pada profil.

### 7.4 Pencarian dan Direktori
- Halaman direktori tenaga terampil dengan pencarian dan filter.
- Halaman direktori kebutuhan/proyek UMKM yang dapat dilihat oleh tenaga terampil.

### 7.5 Pengajuan dan Kesepakatan Proyek
- UMKM dapat mengirimkan permintaan proyek ke tenaga terampil yang direkomendasikan.
- Tenaga terampil dapat menerima atau menolak permintaan.
- Riwayat proyek tercatat pada masing-masing profil.

### 7.6 Transaksi
- Simulasi alur pembayaran melalui payment gateway (untuk prototipe, dapat berupa mock/dummy flow).
- Riwayat transaksi pada dashboard UMKM dan Tenaga Terampil.

### 7.7 Rating dan Review
- UMKM dapat memberikan rating dan ulasan setelah proyek selesai.
- Rating rata-rata ditampilkan pada profil tenaga terampil.

### 7.8 Dashboard
- Dashboard UMKM: proyek aktif, riwayat, tenaga terampil favorit.
- Dashboard Tenaga Terampil: permintaan masuk, proyek aktif, riwayat, pendapatan.

### 7.9 Di Luar Cakupan Prototipe (Out of Scope)
- Sistem pembayaran nyata yang terhubung ke payment gateway sungguhan.
- Aplikasi mobile native (prototipe berfokus pada web).
- Sistem verifikasi identitas tingkat lanjut (misalnya integrasi dengan basis data kependudukan).
- Fitur premium berbayar secara penuh (cukup ditampilkan sebagai konsep pada dashboard).

---

## 8. Model Bisnis (Ringkasan dari Business Model Canvas)

| Elemen | Deskripsi |
|---|---|
| Key Partners | Komunitas dan perangkat desa, komunitas UMKM, lembaga pelatihan/BLK dan kampus, payment gateway, mitra teknologi/cloud |
| Key Activities | Pengembangan dan pemeliharaan platform, AI matching, onboarding, verifikasi tenaga terampil, pengelolaan transaksi dan kualitas layanan, analisis data kebutuhan UMKM |
| Key Resources | Developer internal, cloud/server dan basis data, AI matching dan data profil pengguna, data identitas/sertifikat/portofolio, payment gateway dan sistem rating |
| Value Propositions | Pencocokan berbasis AI antara kebutuhan UMKM dan tenaga terampil lokal |
| Customer Relationships | Rekomendasi AI personal, rating dan review, profil terverifikasi, dukungan pelanggan, riwayat proyek |
| Channels | Website/aplikasi Lokawirya, media sosial, grup komunitas, kampus dan lembaga pelatihan, masyarakat dan grup desa |
| Customer Segments | UMKM lokal, tenaga terampil lokal |
| Cost Structure | Pengembangan dan pemeliharaan platform, infrastruktur cloud, marketing dan akuisisi pengguna, operasional dan verifikasi tenaga terampil, biaya transaksi |
| Revenue Streams | Transaction fee, sponsorship, premium features (opsional) |

---

## 9. Alur Pengguna Utama (User Flow)

### 9.1 Alur UMKM
1. Registrasi dan lengkapi profil usaha.
2. Buat permintaan kebutuhan (jenis jasa, deskripsi, lokasi, anggaran).
3. Sistem AI menampilkan daftar tenaga terampil yang direkomendasikan beserta skor kecocokan.
4. UMKM meninjau profil, mengirim permintaan proyek.
5. Setelah tenaga terampil menerima, proyek berjalan dan dicatat pada dashboard.
6. Setelah proyek selesai, UMKM memberikan rating dan ulasan.

### 9.2 Alur Tenaga Terampil
1. Registrasi dan lengkapi profil (keahlian, lokasi, sertifikat, portofolio).
2. Ajukan verifikasi profil.
3. Menerima notifikasi permintaan proyek dari UMKM yang cocok.
4. Menerima atau menolak permintaan.
5. Menyelesaikan proyek dan memperbarui riwayat serta rating.

---

## 10. Kebutuhan Teknis (Gambaran Umum untuk Prototipe)

Catatan: dokumen ini berfokus pada kebutuhan produk. Detail arsitektur teknis dan tumpukan teknologi disusun terpisah sesuai kebutuhan implementasi menggunakan tools AI coding yang digunakan tim.

- Kebutuhan autentikasi dua peran (UMKM dan Tenaga Terampil).
- Kebutuhan basis data untuk profil, kebutuhan proyek, riwayat transaksi, dan rating.
- Modul AI matching dapat disimulasikan menggunakan aturan pembobotan (rule-based scoring) untuk kebutuhan demo, dengan opsi pengembangan ke model machine learning pada tahap lanjutan.
- Desain responsif untuk tampilan web (desktop dan mobile browser).

---

## 11. Metrik Keberhasilan (Success Metrics)

| Metrik | Target Indikatif |
|---|---|
| Jumlah UMKM terdaftar | Meningkat konsisten setiap bulan pasca-peluncuran |
| Jumlah tenaga terampil terverifikasi | Sesuai target onboarding awal |
| Tingkat kecocokan (match rate) yang berujung transaksi | Menjadi indikator utama efektivitas AI matching |
| Rata-rata rating tenaga terampil | Menjaga kualitas layanan pada platform |
| Retensi pengguna (UMKM dan tenaga terampil) | Menunjukkan nilai keberlanjutan platform |

---

## 12. Risiko dan Asumsi

### 12.1 Asumsi
- UMKM lokal cukup terbuka menggunakan platform digital untuk mencari tenaga kerja.
- Tenaga terampil lokal bersedia melalui proses verifikasi untuk membangun kepercayaan.
- Data kebutuhan proyek cukup untuk melatih atau mengatur sistem pencocokan pada tahap awal.

### 12.2 Risiko
- Ketersediaan tenaga terampil lokal yang terbatas di wilayah tertentu dapat memperlambat pertumbuhan.
- Kepercayaan pengguna terhadap sistem verifikasi baru membutuhkan waktu untuk terbentuk.
- Kompetisi dengan platform freelance nasional yang sudah memiliki basis pengguna besar.

---

## 13. Identitas Merek (Ringkasan)

Identitas visual, sistem warna, tipografi, dan panduan komponen antarmuka disusun secara terpisah pada dokumen `desain.md`. Nama merek: **Lokawirya**. Logo menampilkan ilustrasi jabat tangan yang dipadukan dengan simbol jaringan (node) berwarna hijau neon, merepresentasikan kepercayaan (jabat tangan) yang dijembatani oleh teknologi (AI matching).

---

## 14. Lampiran

- Sumber Business Model Canvas: materi Business Plan Competition GBK, SB-IPB.
- Aset logo: `Lokawirya` (jabat tangan dengan aksen jaringan hijau neon).
