# AdonisJS Manajemen Film API

Anggota Kelompok:
- Jihan Nabilah (2208107010035)
- Shofia Nurul Huda (2208107010015)
- Nisa Rianti (2208107010018)

## Gambaran Proyek

Repositori ini berisi sistem Manajemen Film sederhana yang dibangun dengan AdonisJS, menyediakan endpoint REST API dan antarmuka UI opsional. Sistem ini memungkinkan Anda mengelola data film dengan berbagai operasi.

## Fitur

- **Operasi CRUD Lengkap**:
  - Lihat semua film (GET)
  - Lihat satu film berdasarkan ID (GET)
  - Tambah film baru (POST)
  - Perbarui film yang ada (PUT)
  - Hapus film (DELETE)

- **Antarmuka UI**:
  - Antarmuka berbasis Bootstrap yang bersih
  - Validasi formulir
  - Dialog konfirmasi untuk operasi hapus

- **Database**:
  - Integrasi MySQL
  - Lucid ORM untuk operasi database
  - Dukungan migrasi

## Persyaratan

- Node.js (v14.x atau lebih baru)
- NPM (sudah termasuk dengan Node.js)
- Database MySQL

## Instalasi

1. Clone repositori ini:
   ```bash
   git clone https://github.com/jihanabilah07/adonis-film-api.git
   cd adonis-film-api
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Siapkan variabel lingkungan dengan menyalin file contoh:
   ```bash
   cp .env.example .env
   ```

4. Konfigurasi koneksi database di file `.env`:
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_USER=username_anda
   DB_PASSWORD=password_anda
   DB_DATABASE=film_db
   ```

5. Buat database:
   ```bash
   mysql -u root -p -e "CREATE DATABASE film_db;"
   ```

6. Jalankan migrasi:
   ```bash
   node ace migration:run
   ```

7. Mulai server pengembangan:
   ```bash
   node ace serve --watch
   ```

## Endpoint API

### API Film

| Metode | Endpoint | Deskripsi |
|--------|----------|-------------|
| GET    | `/api/v1/film` | Dapatkan semua film |
| GET    | `/api/v1/film/:id` | Dapatkan satu film berdasarkan ID |
| POST   | `/api/v1/film` | Buat film baru |
| PUT    | `/api/v1/film/:id` | Perbarui film berdasarkan ID |
| DELETE | `/api/v1/film/:id` | Hapus film berdasarkan ID |

### Contoh API (Pengujian dengan Postman)

#### Mendapatkan Semua Film
```
GET http://localhost:3333/api/v1/film
```

Respons:
```json
{
  "data": [
    {
      "id": 1,
      "judul": "Avengers: Endgame",
      "sutradara": "Anthony Russo, Joe Russo",
      "produser": "Kevin Feige",
      "tahun_rilis": 2019,
      "sinopsis": "Setelah peristiwa Infinity War, Avengers bersatu untuk mengalahkan Thanos",
      "durasi": 181,
      "genre": "Action, Adventure, Drama",
      "rating": 8.4,
      "created_at": "2025-04-23T12:00:00.000Z",
      "updated_at": "2025-04-23T12:00:00.000Z"
    }
  ]
}
```

#### Mendapatkan Satu Film
```
GET http://localhost:3333/api/v1/film/1
```

#### Membuat Film Baru
```
POST http://localhost:3333/api/v1/film
Content-Type: application/json

{
  "judul": "The Dark Knight",
  "sutradara": "Christopher Nolan",
  "produser": "Emma Thomas, Christopher Nolan, Charles Roven",
  "tahun_rilis": 2008,
  "sinopsis": "Batman menghadapi Joker dalam pertarungan epik untuk jiwa Gotham City",
  "durasi": 152,
  "genre": "Action, Crime, Drama",
  "rating": 9.0
}
```

#### Memperbarui Film
```
PUT http://localhost:3333/api/v1/film/1
Content-Type: application/json

{
  "judul": "Avengers: Endgame - Director's Cut",
  "sutradara": "Anthony Russo, Joe Russo",
  "produser": "Kevin Feige",
  "tahun_rilis": 2019,
  "sinopsis": "Versi extended dari Avengers Endgame",
  "durasi": 195,
  "genre": "Action, Adventure, Drama",
  "rating": 8.5
}
```

#### Menghapus Film
```
DELETE http://localhost:3333/api/v1/film/1
```

## Panduan Pengujian dengan Postman

1. **Persiapan Postman**:
   - Unduh dan instal Postman dari [postman.com](https://www.postman.com/downloads/)
   - Buka aplikasi Postman

2. **Pengujian GET All**:
   - Buat request baru
   - Pilih metode GET
   - Masukkan URL: `http://localhost:3333/api/v1/film`
   - Klik tombol "Send"
   - Hasil akan ditampilkan di panel bawah

3. **Pengujian GET Single**:
   - Buat request baru
   - Pilih metode GET
   - Masukkan URL: `http://localhost:3333/api/v1/film/1` (ganti 1 dengan ID yang valid)
   - Klik tombol "Send"

4. **Pengujian POST**:
   - Buat request baru
   - Pilih metode POST
   - Masukkan URL: `http://localhost:3333/api/v1/film`
   - Pilih tab "Body"
   - Pilih format "raw" dan "JSON"
   - Masukkan data JSON seperti contoh di atas
   - Klik tombol "Send"

5. **Pengujian PUT**:
   - Buat request baru
   - Pilih metode PUT
   - Masukkan URL: `http://localhost:3333/api/v1/film/1` (ganti 1 dengan ID yang valid)
   - Pilih tab "Body"
   - Pilih format "raw" dan "JSON"
   - Masukkan data JSON yang ingin diperbarui
   - Klik tombol "Send"

6. **Pengujian DELETE**:
   - Buat request baru
   - Pilih metode DELETE
   - Masukkan URL: `http://localhost:3333/api/v1/film/1` (ganti 1 dengan ID yang valid)
   - Klik tombol "Send"

## Antarmuka UI

Akses antarmuka UI di:
```
http://localhost:3333/film
```

### Rute UI

| URL | Deskripsi |
|-----|-------------|
| `/film` | Daftar semua film |
| `/film/create` | Formulir pembuatan film baru |
| `/film/:id/edit` | Formulir edit film |

## Struktur Proyek

```
film-management-system/
├── app/
│   ├── Controllers/Http/FilmController.ts   # Controller utama
│   └── Models/Film.ts                       # Model Film
├── config/                                  # File konfigurasi
├── database/
│   ├── migrations/                          # Migrasi database
│   └── seeders/                             # Seeder database
├── resources/
│   └── views/                               # Template Edge untuk UI
│       ├── film/
│       │   ├── create.edge                  # Formulir pembuatan
│       │   ├── edit.edge                    # Formulir edit
│       │   └── index.edge                   # Halaman daftar
│       └── layouts/
│           └── main.edge                    # Layout utama
├── start/
│   ├── routes.ts                            # Definisi rute
│   └── kernel.ts                            # Pengaturan middleware
├── .env                                     # Variabel lingkungan
└── package.json                             # Dependensi proyek
```

## Model Film

### Struktur Database

Tabel `films` memiliki kolom-kolom berikut:

| Kolom | Tipe | Deskripsi |
|-------|------|-----------|
| id | INTEGER | Primary key (auto increment) |
| judul | VARCHAR(255) | Judul film |
| sutradara | VARCHAR(255) | Nama sutradara |
| produser | VARCHAR(255) | Nama produser |
| tahun_rilis | INTEGER | Tahun rilis film |
| sinopsis | TEXT | Ringkasan cerita film |
| durasi | INTEGER | Durasi film dalam menit |
| genre | VARCHAR(255) | Genre film |
| rating | DECIMAL(3,1) | Rating film (0.0 - 10.0) |
| created_at | TIMESTAMP | Waktu dibuat |
| updated_at | TIMESTAMP | Waktu diperbarui |

## Validasi Data

Sistem ini menerapkan validasi untuk memastikan integritas data:

- **Judul**: Wajib diisi, maksimal 255 karakter
- **Sutradara**: Wajib diisi, maksimal 255 karakter
- **Tahun Rilis**: Wajib diisi, harus berupa angka
- **Durasi**: Wajib diisi, harus berupa angka positif
- **Genre**: Wajib diisi
- **Rating**: Opsional, harus berupa angka antara 0.0 - 10.0

## Kontribusi

1. Fork repositori ini
2. Buat branch baru untuk fitur Anda (`git checkout -b fitur/AmazingFeature`)
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin fitur/AmazingFeature`)
5. Buat Pull Request

## Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## Tim Pengembang

- **Jihan Nabilah** (2208107010035) 
- **Shofia Nurul Huda** (2208107010015) 
- **Nisa Rianti** (2208107010018) 

