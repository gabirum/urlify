import { Link as InertiaLink, InertiaLinkProps } from '@inertiajs/inertia-react'
import classNames from 'classnames'
import React, { FC } from 'react'

interface BasicLinkProps extends InertiaLinkProps {}

export const BasicLink: FC<BasicLinkProps> = ({ className, ...props }) => (
  <InertiaLink {...props} className={classNames('text-purple-600 no-underline', className)} />
)
