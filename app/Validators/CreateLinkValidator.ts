import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateLinkValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    url: schema.string({ trim: true }, [
      rules.url({
        protocols: ['http', 'https'],
        requireProtocol: true,
        validateLength: true,
        requireHost: true,
        requireTld: true,
      }),
    ]),
  })

  public messages: CustomMessages = {}
}
