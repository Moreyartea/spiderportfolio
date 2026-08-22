# SpiderPortfolio — Website Biodata Fatih Taqiyyuddin

Website biodata diri bertema Spider-Man x Neubrutalism. Dibangun dengan React + Vite + Tailwind CSS v4.

## Cara menjalankan di VS Code

1. Extract/buka folder ini di VS Code
2. Buka terminal di VS Code (menu Terminal > New Terminal)
3. Install dependencies:
   ```
   npm install
   ```
4. Jalankan development server:
   ```
   npm run dev
   ```
5. Buka link yang muncul di terminal (biasanya http://localhost:5173) di browser

## Struktur folder

```
src/
  components/
    Hero.jsx        -> Hero section (nama, bio singkat, foto)
    About.jsx        -> Tentang Saya (MASIH DUMMY, perlu diganti)
    DataDiri.jsx      -> Data Diri (nama, universitas, dst)
    Interests.jsx     -> Minat & Hobi
    Skills.jsx        -> Skill/kemampuan
    Projects.jsx      -> Project (NoteZ & StokTeknik)
    Motivation.jsx    -> Motivasi (MASIH DUMMY, perlu diganti)
    Contact.jsx       -> Kontak & footer
  App.jsx             -> Menggabungkan semua section
  index.css           -> Import Tailwind & Google Fonts
public/
  assets/
    foto-profil.jpg  -> TARUH FOTO PROFIL ASLI DI SINI
```

## Yang masih perlu dilengkapi

- [ ] Foto profil asli: taruh file di `public/assets/foto-profil.jpg`
      (Hero.jsx sudah otomatis menampilkannya begitu file ada)
- [ ] Isi ulang teks di `About.jsx` (Tentang Saya) — masih dummy
- [ ] Isi ulang teks di `Motivation.jsx` (Motivasi) — masih dummy
- [ ] (Opsional) Ganti siluet Spider-Man SVG kasar di `Hero.jsx` dengan aset siluet yang lebih detail

## Build untuk production

```
npm run build
```

Hasil build ada di folder `dist/`, siap di-deploy ke Vercel/Netlify atau dikumpulkan sebagai file statis.
