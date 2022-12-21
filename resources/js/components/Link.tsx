import { Link as InertiaLink, InertiaLinkProps } from '@inertiajs/inertia-react'
import classNames from 'classnames'
import React, { FC } from 'react'

interface LinkProps extends InertiaLinkProps {}

export const Link: FC<LinkProps> = ({ className, ...props }) => (
  <InertiaLink
    {...props}
    className={classNames(
      'font-display text-center text-white px-6 py-2 bg-purple-800 hover:bg-purple-900 border border-purple-900 rounded-lg outline-none uppercase',
      className,
    )}
  />
)
