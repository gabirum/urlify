import classNames from 'classnames'
import React, { FC, useRef } from 'react'
import { AriaCheckboxProps, useCheckbox } from 'react-aria'
import { ToggleProps, useToggleState } from 'react-stately'

interface CheckboxProps extends AriaCheckboxProps, ToggleProps {
  className?: string
}

const classes = [
  'appearance-none',
  'grid',
  'place-items-center',
  'w-5',
  'h-5',
  'border-2',
  'rounded-sm',
  'border-purple-900',
  'bg-violet-200',
  'outline-purple-800',
  "before:content-['']",
  'before:w-3',
  'before:h-3',
  'before:scale-0',
  'before:shadow-[inset_1rem_1rem_#581c87]',
  'checked:before:scale-100',
].join(' ')

export const Checkbox: FC<CheckboxProps> = props => {
  const { children, className } = props
  const ref = useRef<HTMLInputElement>(null)
  const toggleState = useToggleState(props)
  const { inputProps } = useCheckbox(props, toggleState, ref)

  return (
    <label className='grid grid-cols-[1rem_auto] gap-2'>
      <input {...inputProps} className={classNames(classes, className)} ref={ref} />
      {children}
    </label>
  )
}
