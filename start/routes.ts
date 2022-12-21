import Route from '@ioc:Adonis/Core/Route'

Route.get('/:id', 'LinkRedirectsController.show').as('link_redirect')

Route.group(() => {
  Route.inertia('/', 'Home/Index')

  Route.group(() => {
    Route.resource('register', 'RegistersController').only(['index', 'store'])
    Route.resource('login', 'LoginController').only(['index', 'store', 'destroy'])
  })
    .middleware(['guest'])
    .prefix('auth')
    .as('auth')

  Route.resource('links', 'LinksController')
}).middleware(['inertia'])
