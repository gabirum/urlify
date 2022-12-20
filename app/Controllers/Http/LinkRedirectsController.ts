import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Link from 'App/Models/Link'

export default class LinkRedirectsController {
  public async show({ params, response }: HttpContextContract) {
    const link = await Link.findOrFail(params.id)

    link.access += 1
    await link.save()

    return response.redirect(link.originalLink)
  }
}
