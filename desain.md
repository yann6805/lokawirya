# Dokumen Desain (Design Specification)
## Lokawirya — Platform Pencocokan UMKM dan Tenaga Terampil Lokal Berbasis AI

**Versi Dokumen:** 1.0
**Status:** Draft untuk Business Plan Competition (BPC) GBK — SB-IPB

Dokumen ini menjadi acuan desain visual dan antarmuka untuk prototipe Lokawirya. Ditujukan agar tampilan konsisten, profesional, dan selaras dengan identitas merek yang sudah ditetapkan.

---

## 1. Filosofi Desain

Lokawirya mengusung kesan profesional, terpercaya, dan modern, dengan sentuhan teknologi (AI) yang terlihat melalui elemen jaringan/node pada logo. Gaya visual mengarah pada tampilan platform bisnis/B2B yang bersih, bukan aplikasi konsumen yang playful. Prinsip utama:

- **Clarity over decoration** — antarmuka mengutamakan keterbacaan dan fungsi, dekorasi seperlunya.
- **Trust through structure** — penggunaan whitespace, garis, dan kontras yang tegas untuk membangun kesan kredibel.
- **Teknologi sebagai aksen, bukan dominasi** — warna neon hanya digunakan sebagai aksen penekanan (call-to-action, ikon, status), bukan warna dasar layar.
- Emoji tidak digunakan pada antarmuka produk. Ikon menggunakan set ikon garis (line icon) yang konsisten.

---

## 2. Palet Warna

| Peran | Warna | Kode Hex (indikatif) | Penggunaan |
|---|---|---|---|
| Primary Accent (Neon Green) | Hijau Neon | `#A8FF00` | Tombol utama (CTA), highlight, badge status aktif/terverifikasi, elemen grafis logo |
| Neon Green — Hover/Dark | Hijau Neon Gelap | `#8FE000` | Status hover/aktif pada elemen interaktif hijau |
| Base Black | Hitam | `#0A0A0A` | Teks utama, header/navbar pada varian gelap, footer |
| Base White | Putih | `#FFFFFF` | Latar utama, area konten, kartu (card) |
| Neutral Gray — Dark | Abu Gelap | `#1F1F1F` | Latar seksi alternatif (dark section), teks sekunder pada latar terang |
| Neutral Gray — Light | Abu Terang | `#F4F4F4` | Latar seksi alternatif (light section), pembatas antar-blok konten |
| Neutral Gray — Border | Abu Garis | `#E0E0E0` | Garis pembatas (border), pembagi (divider) |
| Status — Success | Hijau Neon (sama dengan primary) | `#A8FF00` | Indikator berhasil, verified badge |
| Status — Warning | Kuning Amber | `#FFB020` | Status menunggu verifikasi/pending |
| Status — Error | Merah | `#E5484D` | Pesan kesalahan, validasi gagal |

### 2.1 Prinsip Penggunaan Warna
- Latar dominan: putih dan hitam. Hijau neon digunakan secara terbatas (maksimal untuk 1–2 elemen fokus per layar) agar tetap terasa premium, bukan mencolok berlebihan.
- Teks body menggunakan hitam (`#0A0A0A`) di atas latar putih, dan putih di atas latar hitam/gelap.
- Hindari teks hijau neon pada paragraf panjang karena kontras dan keterbacaannya rendah; hijau neon lebih tepat untuk elemen kecil bertekanan visual tinggi (tombol, badge, ikon, garis aksen).

---

## 3. Tipografi

| Elemen | Font (rekomendasi) | Bobot | Ukuran Indikatif (desktop) |
|---|---|---|---|
| Logo/Wordmark | Sesuai aset logo (sans-serif tebal, geometris) | Bold | — |
| Heading 1 | Inter atau Poppins | Bold (700) | 40–48px |
| Heading 2 | Inter atau Poppins | Semibold (600) | 28–32px |
| Heading 3 | Inter atau Poppins | Semibold (600) | 20–24px |
| Body Text | Inter | Regular (400) | 16px |
| Caption/Meta | Inter | Regular (400) | 13–14px |
| Tombol (Button Label) | Inter | Medium/Semibold (500–600) | 14–16px |

Catatan: Inter dipilih karena netral, sangat legible untuk antarmuka bisnis, dan tersedia gratis (Google Fonts), memudahkan implementasi cepat untuk prototipe.

---

## 4. Logo dan Penggunaannya

- Logo terdiri dari ilustrasi dua tangan berjabat tangan (garis hitam) dengan elemen jaringan/node berwarna hijau neon di bagian atas, merepresentasikan kepercayaan yang difasilitasi teknologi AI. Wordmark "Lokawirya" ditulis tebal berwarna hitam.
- **Area aman (clear space):** beri ruang kosong di sekeliling logo minimal setara tinggi huruf "L" pada wordmark.
- **Varian logo:**
  - Varian utama: hitam + hijau neon di atas latar putih.
  - Varian latar gelap: wordmark dan garis tangan berwarna putih, elemen jaringan tetap hijau neon.
  - Varian monokrom: seluruh elemen hitam (untuk penggunaan dokumen/cetak satu warna).
- Logo tidak diberi efek bayangan, gradasi tambahan, atau distorsi bentuk.

---

## 5. Ikonografi

- Menggunakan ikon bergaya garis (outline/line icons), ketebalan garis konsisten (contoh pustaka ikon yang sesuai: Lucide Icons atau Feather Icons).
- Ikon status verifikasi menggunakan bentuk badge bulat kecil dengan warna hijau neon dan tanda centang.
- Hindari ikon bergaya ilustrasi penuh warna (flat illustration) yang playful; ikon tetap dalam nuansa hitam/putih dengan aksen hijau neon jika perlu penekanan.

---

## 6. Komponen Antarmuka (UI Components)

### 6.1 Tombol (Button)
- **Primary Button:** latar hijau neon (`#A8FF00`), teks hitam, sudut membulat sedang (radius 8px), tanpa bayangan berlebihan.
- **Secondary Button:** latar putih atau transparan, border hitam 1.5px, teks hitam.
- **Ghost/Text Button:** tanpa latar dan border, teks hitam dengan garis bawah saat hover.
- Status hover: primary button berubah ke hijau neon gelap (`#8FE000`).

### 6.2 Kartu (Card)
- Latar putih, border tipis abu-abu (`#E0E0E0`) atau bayangan halus (soft shadow), sudut membulat 12px.
- Digunakan untuk kartu profil tenaga terampil, kartu proyek, dan kartu ringkasan pada dashboard.

### 6.3 Badge/Status
- **Terverifikasi:** latar hijau neon muda (opacity rendah, misalnya `#A8FF00` dengan transparansi), teks/ikon hijau neon pekat.
- **Menunggu Verifikasi:** latar kuning amber muda, teks amber.
- **Ditolak/Nonaktif:** latar abu-abu, teks abu gelap.

### 6.4 Formulir (Form)
- Input field dengan border abu-abu tipis, berubah menjadi border hijau neon saat fokus (focus state).
- Label di atas input, teks hitam, ukuran 14px.
- Pesan validasi error menggunakan warna merah (`#E5484D`) di bawah field terkait.

### 6.5 Navigasi
- **Navbar (atas):** latar putih atau hitam (tergantung varian halaman), logo di kiri, menu utama di tengah/kanan, tombol CTA (misalnya "Daftar" atau "Masuk") menggunakan primary button hijau neon.
- **Sidebar Dashboard:** latar hitam atau abu gelap, ikon dan label menu berwarna putih, item aktif diberi aksen garis atau latar hijau neon tipis di sisi kiri.

### 6.6 Skor Kecocokan (Match Score)
- Ditampilkan sebagai indikator lingkaran progres (circular progress) atau bar horizontal singkat dengan warna hijau neon menandakan tingkat kecocokan tinggi.
- Sertakan angka persentase di samping indikator visual.

---

## 7. Tata Letak Halaman (Page Layouts)

### 7.1 Landing Page
1. **Navbar** — logo, menu (Tentang, Untuk UMKM, Untuk Tenaga Terampil, Masuk/Daftar).
2. **Hero Section** — headline utama tentang proposisi nilai, subheading singkat, dua tombol CTA ("Saya UMKM" dan "Saya Tenaga Terampil"), ilustrasi/logo sebagai elemen visual pendukung.
3. **Cara Kerja (How It Works)** — tiga hingga empat langkah singkat dengan ikon garis.
4. **Segmen Pengguna** — dua blok berdampingan menjelaskan manfaat untuk UMKM dan untuk tenaga terampil.
5. **Kepercayaan/Verifikasi** — penjelasan singkat sistem verifikasi dan rating.
6. **Call to Action Akhir** — ajakan mendaftar dengan latar kontras (hitam dengan aksen hijau neon).
7. **Footer** — informasi kontak, tautan, logo kecil.

### 7.2 Dashboard UMKM
- Header ringkasan: nama usaha, jumlah proyek aktif, jumlah tenaga terampil favorit.
- Bagian "Buat Kebutuhan Baru" (form singkat/CTA menonjol).
- Daftar rekomendasi tenaga terampil (kartu dengan skor kecocokan).
- Daftar proyek aktif dan riwayat proyek dalam bentuk tabel atau daftar kartu.

### 7.3 Dashboard Tenaga Terampil
- Header ringkasan: status verifikasi, rating rata-rata, jumlah proyek selesai.
- Daftar permintaan proyek masuk (dengan opsi terima/tolak).
- Daftar proyek aktif dan riwayat proyek.
- Bagian profil dan portofolio yang dapat diperbarui.

### 7.4 Halaman Profil Tenaga Terampil (dilihat oleh UMKM)
- Foto/inisial profil, nama, lokasi, badge verifikasi.
- Daftar keahlian (tag/chip).
- Rating dan jumlah ulasan.
- Galeri portofolio singkat.
- Tombol utama "Ajukan Proyek".

### 7.5 Halaman Direktori/Pencarian
- Panel filter di sisi kiri (kategori keahlian, lokasi, rentang harga, rating minimum).
- Grid kartu hasil pencarian di sisi kanan, masing-masing menampilkan ringkasan profil dan skor kecocokan bila tersedia.

---

## 8. Prinsip Responsif

- Prototipe berfokus pada tampilan web, namun tata letak harus tetap rapi pada lebar layar tablet dan mobile browser.
- Navbar berubah menjadi menu hamburger pada lebar layar sempit.
- Grid kartu (direktori, rekomendasi) menyesuaikan jumlah kolom: 3 kolom (desktop), 2 kolom (tablet), 1 kolom (mobile).
- Sidebar dashboard dapat disembunyikan/collapse pada tampilan mobile.

---

## 9. Nada Konten (Content Tone)

- Bahasa yang digunakan pada antarmuka: Bahasa Indonesia formal namun tetap mudah dipahami, tidak kaku secara birokratis.
- Hindari jargon teknis berlebihan pada sisi UMKM; gunakan istilah teknis (misalnya "match score") secukupnya dengan penjelasan singkat bila perlu.
- Tidak menggunakan emoji pada label tombol, judul, atau notifikasi sistem. Ikon garis digunakan sebagai pengganti penekanan visual.

---

## 10. Catatan Implementasi

Dokumen ini adalah acuan visual dan struktural. Detail teknis implementasi (framework, struktur komponen kode, dan sebagainya) disusun terpisah sesuai kebutuhan saat menyusun prompt untuk tools AI coding yang digunakan tim (misalnya opencode atau Antigravity), dengan tetap merujuk pada palet warna, tipografi, dan tata letak yang telah ditetapkan pada dokumen ini.
