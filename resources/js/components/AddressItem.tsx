import React, { FC } from 'react'
import { GitHub } from 'react-feather'

interface AddressItemProps {
  name: string
  message: string
  href: string
}

export const AddressItem: FC<AddressItemProps> = ({ name, message, href }) => (
  <a href={href} rel='noopener noreferrer' target='_blank' className='flex items-center gap-2'>
    <GitHub size={36} />
    <div>
      <p className='font-input text-xs text-neutral-500'>{message}</p>
      <p className='font-display text-2xl'>{name}</p>
    </div>
  </a>
)
