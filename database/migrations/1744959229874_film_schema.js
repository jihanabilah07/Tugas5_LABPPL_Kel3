'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FilmSchema extends Schema {
  up () {
    this.create('films', (table) => {
      table.increments()
      table.string('judul', 100).notNullable()
      table.string('sutradara', 100).notNullable()
      table.string('produser', 100).notNullable()
      table.integer('tahun_rilis').notNullable()
      table.text('sinopsis')
      table.integer('durasi') // durasi dalam menit
      table.string('genre', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('films')
  }
}

module.exports = FilmSchema
