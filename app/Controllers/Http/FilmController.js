'use strict'

const Film = use('App/Models/Film') // Import model Film

class FilmController {
  // Menampilkan halaman daftar semua film
  async index ({ view }) {
    const films = await Film.all() // Ambil semua data film dari database
    return view.render('film.index', { films: films.toJSON() }) // Render ke view dengan data film
  }

  // API untuk mendapatkan semua film dalam format JSON
  async getAll ({ response }) {
    const films = await Film.all() // Ambil semua data film
    return response.status(200).json({
      data: films // Return data dalam format JSON
    })
  }

  // API untuk mendapatkan satu film berdasarkan ID
  async getOne ({ params, response }) {
    try {
      const film = await Film.findOrFail(params.id) // Cari film berdasarkan ID, error kalau tidak ketemu
      return response.status(200).json({
        data: film
      })
    } catch (error) {
      return response.status(404).json({
        message: 'Film tidak ditemukan',
        id: params.id
      })
    }
  }

  // Menampilkan form untuk membuat film baru
  async create ({ view }) {
    return view.render('film.create') // Render form create film
  }

  // Menyimpan film baru ke database
  async store ({ request, response, session }) {
    const filmData = request.only([
      'judul', 'sutradara', 'produser', 'tahun_rilis', 
      'sinopsis', 'durasi', 'genre' // Ganti sesuai field film
    ])
    
    try {
      const film = await Film.create(filmData)

      if (request.accepts(['html', 'json']) === 'json') {
        return response.status(201).json({
          message: 'Film berhasil ditambahkan',
          data: film
        })
      }

      session.flash({ notification: 'Film berhasil ditambahkan!' })
      return response.redirect('/film')
    } catch (error) {
      return response.status(400).json({
        message: 'Gagal menambahkan film',
        error: error.message
      })
    }
  }

  // Menampilkan form edit film
  async edit ({ params, view }) {
    const film = await Film.find(params.id)
    return view.render('film.edit', { film: film.toJSON() })
  }

  // Memperbarui data film
  async update ({ params, request, response, session }) {
    try {
      const film = await Film.findOrFail(params.id)
      const filmData = request.only([
        'judul', 'sutradara', 'produser', 'tahun_rilis', 
        'sinopsis', 'durasi', 'genre'
      ])
      
      film.merge(filmData)
      await film.save()

      if (request.accepts(['html', 'json']) === 'json') {
        return response.status(200).json({
          message: 'Film berhasil diperbarui',
          data: film
        })
      }

      session.flash({ notification: 'Film berhasil diperbarui!' })
      return response.redirect('/film')
    } catch (error) {
      return response.status(404).json({
        message: 'Film tidak ditemukan',
        id: params.id
      })
    }
  }

  // Menghapus film dari database
  async destroy ({ params, response, session }) {
    try {
      const film = await Film.findOrFail(params.id)
      await film.delete()

      session.flash({ notification: 'Film berhasil dihapus!' })
      return response.redirect('/film')
    } catch (error) {
      return response.status(404).json({
        message: 'Film tidak ditemukan',
        id: params.id
      })
    }
  }
}

module.exports = FilmController // Export controller
