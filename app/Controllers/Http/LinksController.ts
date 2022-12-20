import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { string } from '@ioc:Adonis/Core/Helpers'
import Link from 'App/Models/Link'
import Route from '@ioc:Adonis/Core/Route'
import CreateLinkValidator from 'App/Validators/CreateLinkValidator'

export default class LinksController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const { url } = await request.validate(CreateLinkValidator)

    const link = await Link.create({ id: string.generateRandom(8), originalLink: url })
    const shortenUrl = Route.makeUrl('link_redirect', [link.id], { prefixUrl: 'http://localhost:3000' })

    return response.json({ shortenUrl })
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
