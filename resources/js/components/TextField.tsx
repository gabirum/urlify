import classNames from 'classnames'
import React, { FC, useRef } from 'react'
import { AriaTextFieldOptions, useTextField } from 'react-aria'

interface TextFieldProps extends AriaTextFieldOptions<'input'> {
  containerClassName?: string
  labelClassName?: string
  className?: string
  descriptionClassName?: string
  errorMessageClassName?: string
}

export const TextField: FC<TextFieldProps> = props => {
  const {
    label,
    description,
    errorMessage,
    containerClassName,
    labelClassName,
    className,
    descriptionClassName,
    errorMessageClassName,
  } = props
  const ref = useRef<HTMLInputElement>(null)
  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(props, ref)

  return (
    <div className={classNames('flex flex-col gap-0.5 font-input', containerClassName)}>
      <label {...labelProps} className={classNames('text-neutral-800', labelClassName)}>
        {label}
      </label>
      <input
        {...inputProps}
        className={classNames(
          'px-4 py-2 border-none rounded-xl text-neutral-800 bg-violet-200 outline-purple-800',
          className,
        )}
        ref={ref}
      />
      {description ? (
        <span
          {...descriptionProps}
          className={classNames('text-xs text-blue-700 dark:text-blue-400', descriptionClassName)}
        >
          {description}
        </span>
      ) : null}
      {errorMessage ? (
        <span
          {...errorMessageProps}
          className={classNames('text-xs text-red-600 dark:text-red-400', errorMessageClassName)}
        >
          {errorMessage}
        </span>
      ) : null}
    </div>
  )
}
