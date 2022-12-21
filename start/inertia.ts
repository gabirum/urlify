/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia'

Inertia.share({
  loggedUser: ({ auth }) => auth.use('web').user,
  errors: ({ session }) => session.flashMessages.get('errors'),
}).version(() => Inertia.manifestFile('public/assets/manifest.json'))
