import type User from 'App/Models/User'
import React, { FC } from 'react'
import { Link } from './Link'

interface HeaderProps {
  user?: User | null
}

export const Header: FC<HeaderProps> = ({ user }) => (
  <header className='flex justify-between items-center px-8 py-4'>
    <span className='font-display text-3xl'>URLIFY</span>
    {user ? <span className='font-display'>Bem vindo, {user.name}</span> : <Link href='/auth/login'>Fazer Login</Link>}
  </header>
)
