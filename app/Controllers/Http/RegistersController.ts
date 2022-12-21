import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/RegisterValidator'

export default class RegistersController {
  public async index({ inertia }: HttpContextContract) {
    return await inertia.render('Auth/Register')
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const { remember, ...data } = await request.validate(RegisterValidator)

    const user = await User.create(data)
    await auth.use('web').login(user, remember)

    return response.redirect('/')
  }
}
