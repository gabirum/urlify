import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/LoginValidator'

export default class LoginController {
  public async index({ inertia }: HttpContextContract) {
    return await inertia.render('Auth/Login')
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const { email, password, remember } = await request.validate(LoginValidator)

    await auth.use('web').attempt(email, password, remember)

    return response.redirect('/')
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.use('web').logout()
  }
}
