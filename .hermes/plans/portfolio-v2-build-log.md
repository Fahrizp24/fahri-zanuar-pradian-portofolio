# Portfolio v2 — "Build Log"

**Owner:** Fahri Zanuar Pradian
**Source v1:** `D:\fahri-zanuar-pradian-portofolio` (Next.js + shadcn/ui + ThreeUI vendored)
**Status:** plan — belum dieksekusi
**Last updated:** 2026-10-20

---

## 1. Tujuan

Pengunjung harus merasakan dua hal, dalam urutan ini:

1. "Orang ini bisa bangun sistem nyata, ada buktinya."
2. "Orang ini teliti dan terdokumentasi."

Semua keputusan desain di bawah diturunkan dari dua pernyataan itu. Apa pun
yang tidak menambah bukti atau tidak menambah kejelasan dibuang.

### Non-tujuan

- Bukan showreel sinematik.
- Bukan demo kemampuan WebGL.
- Bukan klon Clay / Kage / Sylva.
- Tidak mengejar "wow" di detik pertama jika mengorbankan kredibilitas.

---

## 2. Konsep: Build Log

Portfolio diperlakukan sebagai **catatan teknik**: setiap pekerjaan punya
record, setiap klaim punya lampiran.

Bahasa visualnya datasheet / dokumentasi engineering:

- artefak difoto jelas, bukan di-styling berlebihan
- leader line + label menjelaskan bagian
- margin berisi index, tanggal, tick mark
- angka hasil ditonjolkan, bukan adjektif

Metafora ditolak secara sadar:

| Ditolak | Alasan |
|---|---|
| akar / pohon tumbuh | dipinjam dari Sylva, bukan dari pekerjaan Fahri |
| kamera terbang antar ruang | portfolio punya tahapan, bukan ruang |
| lensa kamera sebagai ikon CV | lensa itu props; yang nyata adalah bounding box + confidence |
| growth rings | dekoratif, tidak terverifikasi |

---

## 3. Sistem visual

```text
paper      #f5f5f0   latar utama (broken white)
ink        #171918   teks utama
pcb        #24483b   moss green — aksen struktural, index tab
signal     #b94a36   ember red — penanda aktif, satu per layar
measure    #506b76   blue-grey — tick, bar, anotasi sekunder
```

Aturan keras:

- Tanpa yellow, cream, orange.
- Gradient hanya untuk shadow, tidak untuk dekorasi.
- `signal` maksimal satu titik fokus per viewport.
- Kontras teks minimum 4.5:1.

### Tipografi

```text
display : serif teknis / grotesk tajam, 1 keluarga
body    : grotesk netral, 1 keluarga
mono    : untuk angka, tanggal, index, label anotasi
```

Mono wajib untuk semua angka hasil — menegaskan nada terukur.

### Grid

- 12 kolom, margin lebar, rata kiri ketat.
- Anotasi hidup di margin, bukan menimpa konten.

---

## 4. Peran 3D

3D dipakai **satu kali**, di hero, untuk satu alasan: menunjukkan artefak
fisik yang Fahri benar-benar buat.

```text
kamera   : diam
objek    : berotasi terbatas (maks ±20°) mengikuti scroll/pointer
anotasi  : HTML di atas canvas, bukan di dalam canvas
```

Kamera tidak bergerak karena tidak ada ruang untuk dijelajahi. Scroll
mengubah **state objek dan label**, bukan posisi penonton.

Sisa halaman: HTML + CSS + scroll reveal ringan. Tanpa WebGL kedua.

### Kriteria batal 3D

Jika salah satu terjadi, hero 3D diganti foto artefak beranotasi:

- model GLB > 2 MB setelah kompresi
- FPS mobile mid-range < 30
- waktu produksi model > 2 hari kerja

Static fallback bukan kegagalan. Dua tujuan di bagian 1 tetap tercapai tanpa 3D.

---

## 5. Struktur halaman

```text
00  Masthead      nama, peran, satu klaim terukur, dua CTA
01  Artifact      hero 3D / foto artefak beranotasi
02  Build Log     daftar proyek sebagai record
03  Records       detail per proyek (problem → build → result → evidence)
04  Vision        hasil deteksi YOLO sebagai bukti
05  Stack         teknologi yang benar-benar dipakai per proyek
06  Evidence      sertifikat + prestasi sebagai arsip terverifikasi
07  Log           timeline pendidikan, magang, kompetisi
08  Contact       email, GitHub, LinkedIn, CV
```

### 02/03 — format record proyek

Setiap proyek memakai struktur identik. Konsistensi itu yang membangun
kesan "terdokumentasi".

```text
REC-00n
Judul
Peran            apa yang Fahri kerjakan sendiri
Konteks          kuliah / lomba / magang / mandiri
Masalah          1-2 baris
Yang dibangun    3-5 poin konkret
Teknologi        tag, dari stack nyata
Hasil            angka bila ada; "tidak diukur" bila tidak ada
Lampiran         screenshot / poster / repo / demo
```

Aturan isi:

- Tidak ada metrik yang dikarang.
- Jika hasil tidak terukur, tulis apa yang berhasil dikerjakan, bukan dampak imajiner.
- Peran dibedakan jelas pada proyek tim.

### 06 — format evidence

```text
EV-00n
Nama sertifikat / prestasi
Penerbit
Tanggal
Kompetensi yang divalidasi
Status verifikasi    link / dokumen / tidak tersedia
```

Status verifikasi ditampilkan apa adanya. Kejujuran di sini justru memperkuat
tujuan nomor 2.

---

## 6. Inventaris aset v1

Terkonfirmasi ada di `public/assets`:

```text
safeband-mockup.jpg        31 KB
safeband-item.jpg          36 KB
algasense-poster.jpg      335 KB
fasilitas-landing.jpg     179 KB
fasilitas-dashboard.jpg    63 KB
fasilitas-list.jpg         54 KB
fasilitas-login.jpg        87 KB
yolo-car91.jpg            120 KB
yolo-van.jpg              205 KB
yolo-istock.jpg            70 KB
bottele-demo.jpg           75 KB
profile.png               134 KB
Prompt___Cinematic_hyper_real.mp4   2.7 MB
```

Konten teks terkonfirmasi:

```text
Juara II — Batur Geopark Literacy Competition, Nov 2025
  esai: "Pembangunan Berkelanjutan di Batur Geopark Melalui
         Pendekatan Geo-Circular Living Lab"
Politeknik Negeri Malang, D4 Teknik Informatika, IPK 3.85
Stack v1: Laravel, React/TypeScript/Tailwind, REST API,
          database design, OOP, WordPress/WooCommerce
```

### Tindakan per aset

| Aset | Tindakan |
|---|---|
| screenshot `fasilitas-*` | pakai, konversi WebP, beri anotasi |
| `safeband-*` | pakai sebagai artefak hero kandidat |
| `algasense-poster` | pakai sebagai lampiran, bukan hero |
| `yolo-*` | pakai di section Vision, overlay anotasi sendiri |
| `bottele-demo` | pakai jika proyeknya masih diklaim |
| `profile.png` | ganti latar jadi `#f5f5f0`, tanpa glow |
| `Prompt___Cinematic...mp4` | **buang** — tidak terkait bukti kerja |
| ThreeUI vendored (Kage/Sylva) | **buang** — lisensi tidak jelas, dan konsep v2 tidak memakainya |

### Yang harus dibuat baru

```text
anotasi overlay (SVG) per screenshot
konversi WebP semua raster
model/foto artefak hero
preview sertifikat (butuh file asli dari Fahri)
favicon + OG image
```

---

## 7. Keputusan teknis

```text
framework   Next.js (App Router, static export)
styling     CSS modules atau Tailwind — pilih satu, jangan dua
3D          Three.js + React Three Fiber, hanya di hero, lazy-loaded
scroll      IntersectionObserver + CSS transition
             (GSAP hanya jika hero 3D benar-benar jadi)
hosting     Vercel
backend     tidak ada
CMS         tidak ada — konten sebagai data file TypeScript
```

Dibuang dari v1:

- shadcn/ui lengkap (≈45 komponen, dipakai sebagian kecil)
- ThreeUI vendored
- Unicorn Studio embed
- animasi glow / gradient dekoratif

Alasan: v2 butuh ~6 komponen. Memelihara 45 komponen untuk 6 kebutuhan itu beban mati.

### Struktur file target

```text
src/
  app/
    layout.tsx
    page.tsx
  content/
    projects.ts        ← satu sumber kebenaran, tipe ketat
    evidence.ts
    timeline.ts
  components/
    Masthead.tsx
    Artifact.tsx       ← dynamic import, ssr:false
    Record.tsx
    EvidenceGrid.tsx
    Annotation.tsx
  styles/
public/
  assets/              ← WebP hasil konversi
  evidence/            ← sertifikat asli
```

Tipe konten memaksa disiplin:

```ts
type Result =
  | { kind: 'measured'; value: string; method: string }
  | { kind: 'unmeasured'; note: string }
```

Tidak bisa mengarang angka tanpa menyebut metode.

---

## 8. Milestone

### M1 — Content audit
- Inventarisasi semua proyek, sertifikat, prestasi dari v1 + file asli Fahri
- Tandai mana yang punya bukti, mana yang tidak
- Tulis `projects.ts`, `evidence.ts`, `timeline.ts`
- **Keluaran:** data lengkap, nol placeholder
- **Blocker:** butuh file sertifikat asli dari Fahri

### M2 — Static page, tanpa 3D
- Masthead, Build Log, Records, Evidence, Log, Contact
- Semua konten nyata, tipografi dan grid final
- **Keluaran:** halaman yang sudah memenuhi tujuan 1 dan 2 tanpa 3D sama sekali
- **Gate:** jika M2 tidak terasa kredibel, 3D tidak akan menolong — perbaiki dulu

### M3 — Annotation layer
- SVG leader line + label pada screenshot
- Section Vision dengan overlay deteksi
- **Keluaran:** nada "terdokumentasi" terasa

### M4 — Hero artifact
- Foto artefak beranotasi dulu
- Lalu coba 3D; terapkan kriteria batal di bagian 4
- **Keluaran:** hero final, 3D atau statis

### M5 — Quality
- Responsive, keyboard navigation, focus visible
- `prefers-reduced-motion`
- Lighthouse, WebGL failure path
- Metadata + OG
- **Keluaran:** siap deploy

Urutan ini sengaja menaruh 3D di akhir. Bukti dulu, efek kemudian.

---

## 9. Risiko

| Risiko | Mitigasi |
|---|---|
| Sertifikat tidak lengkap | tampilkan status verifikasi apa adanya |
| Proyek tanpa hasil terukur | tipe `unmeasured`, jelaskan yang dikerjakan |
| Gaya datasheet terasa kaku | satu titik `signal` per layar + whitespace lega |
| Hero 3D membengkak | kriteria batal di bagian 4 |
| Ikut-ikutan v1 lagi | v2 proyek baru, v1 dibaca sebagai sumber konten saja |
| Lisensi ThreeUI | dibuang total |

---

## 10. Perlu dari Fahri sebelum M1

1. File sertifikat asli — PDF atau scan.
2. Daftar prestasi lengkap (v1 hanya memuat satu).
3. Konfirmasi proyek mana yang masih mau diklaim.
4. Untuk setiap proyek: peran spesifik dan hasil terukur bila ada.
5. Repo / demo URL yang boleh dipublikasikan.
6. Keputusan bahasa: Indonesia, Inggris, atau dua bahasa.
7. Keputusan: v2 sebagai repo baru, atau branch di repo v1.

---

## 11. Rujukan konsep

Concept art (arah visual, bukan aset final):

```text
hero artifact    https://v3b.fal.media/files/b/0aaf1d1c/fBKQsM9C5KEctWgKIAug2_tTahdN6T.png
project record   https://v3b.fal.media/files/b/0aaf1d1c/104cGMq7mdlG5A0oIlJpx_QZlp2JNM.png
evidence index   https://v3b.fal.media/files/b/0aaf1d1c/lvPXC2KwbGWJ5bGpi0Wxx_2ogaB5Fy.png
vision results   https://v3b.fal.media/files/b/0aaf1d1c/Dsg3m2rZ5aAUz1-IoF35U_Q4aTV4X6.png
```

Gambar ini arah tonal. Aset produksi memakai screenshot dan dokumen asli.
