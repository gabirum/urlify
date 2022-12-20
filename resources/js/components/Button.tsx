import classNames from 'classnames'
import React, { FC, useRef } from 'react'
import { AriaButtonProps, useButton } from 'react-aria'

interface ButtonProps extends AriaButtonProps<'button'> {
  className?: string
}

export const Button: FC<ButtonProps> = props => {
  const { children, className } = props
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)

  return (
    <button
      {...buttonProps}
      className={classNames(
        'font-display text-white px-6 py-2 bg-purple-800 hover:bg-purple-900 border border-purple-900 rounded-lg outline-none uppercase',
        className,
      )}
      ref={ref}
    >
      {children}
    </button>
  )
}
