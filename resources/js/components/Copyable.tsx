import React, { FC, useEffect, useRef } from 'react'
import { useClipboard } from 'react-aria'

interface CopyableProps {
  autoFocus?: boolean
  message: string
}

export const Copyable: FC<CopyableProps> = ({ message, autoFocus }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { clipboardProps } = useClipboard({
    getItems: () => [{ 'text/plain': message }],
  })

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message)
  }

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus()
      getSelection()?.selectAllChildren(ref.current)
    }
  }, [autoFocus])

  return (
    <div className='flex justify-between h-11 border-none rounded-xl dark:text-neutral-800 bg-violet-200 outline-purple-800'>
      <div
        {...clipboardProps}
        ref={ref}
        tabIndex={0}
        className='font-input flex-1 flex items-center h-full px-4 border-y-2 border-l-2 rounded-l-xl border-purple-300'
      >
        {message}
      </div>
      <button
        className='flex items-center h-full px-4 bg-violet-400 hover:bg-violet-500 border-2 rounded-r-xl border-purple-700 outline-purple-800'
        onClick={handleCopy}
      >
        <span className='font-display uppercase text-purple-900'>Copiar</span>
      </button>
    </div>
  )
}
