import Route from '@ioc:Adonis/Core/Route'

Route.get('/:id', 'LinkRedirectsController.show').as('link_redirect')

Route.group(() => {
  Route.inertia('/', 'Home/Index')
  Route.resource('links', 'LinksController')
}).middleware(['inertia'])
