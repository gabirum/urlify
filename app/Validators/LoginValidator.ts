import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({ trim: true }, [rules.email(), rules.exists({ column: 'email', table: 'users' })]),
    password: schema.string({}, [rules.minLength(6), rules.maxLength(18)]),
    remember: schema.boolean.optional(),
  })

  public messages: CustomMessages = {}
}
