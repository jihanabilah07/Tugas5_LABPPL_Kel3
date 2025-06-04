'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// UI Routes
Route.get('/', ({ response }) => {
  return response.redirect('/film')
})
Route.get('/film', 'FilmController.index')
Route.get('/film/create', 'FilmController.create')
Route.get('/film/:id/edit', 'FilmController.edit')
Route.post('/film', 'FilmController.store')
Route.put('/film/:id', 'FilmController.update')
Route.delete('/film/:id', 'FilmController.destroy')

// API Routes
Route.group(() => {
  Route.get('/film', 'FilmController.getAll')
  Route.get('/film/:id', 'FilmController.getOne')
  Route.post('/film', 'FilmController.store')
  Route.put('/film/:id', 'FilmController.update')
  Route.delete('/film/:id', 'FilmController.destroy')
}).prefix('api/v1')
