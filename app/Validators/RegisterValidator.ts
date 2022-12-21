import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }, [rules.maxLength(55)]),
    email: schema.string({ trim: true }, [rules.email(), rules.unique({ column: 'email', table: 'users' })]),
    password: schema.string({}, [rules.minLength(6), rules.maxLength(18)]),
    remember: schema.boolean.optional(),
  })

  public messages: CustomMessages = {}
}
