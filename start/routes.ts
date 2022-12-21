import Route from '@ioc:Adonis/Core/Route'

Route.get('/:id', 'LinkRedirectsController.show').as('link_redirect')

Route.group(() => {
  Route.resource('auth/register', 'RegistersController').only(['index', 'store'])
  Route.resource('auth/login', 'LoginController').only(['index', 'store', 'destroy'])
  Route.inertia('/', 'Home/Index')
  Route.resource('links', 'LinksController')
}).middleware(['inertia'])
