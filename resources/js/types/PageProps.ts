import type User from 'App/Models/User'

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = Record<
  'loggedUser',
  User | null | undefined
> &
  T
