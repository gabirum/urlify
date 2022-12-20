import Server from '@ioc:Adonis/Core/Server'

Server.middleware.register([
  async () => await import('@ioc:Adonis/Core/BodyParser'),
  async () => await import('@ioc:Adonis/Addons/Shield'),
  async () => await import('App/Middleware/SilentAuth'),
])

Server.middleware.registerNamed({
  auth: async () => await import('App/Middleware/Auth'),
  inertia: async () => await import('@ioc:EidelLev/Inertia/Middleware'),
})
