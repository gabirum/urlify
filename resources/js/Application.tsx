import React, { FC, ReactNode } from 'react'
import { SSRProvider } from 'react-aria'

interface ApplicationProps {
  getLayout?: (page: ReactNode) => ReactNode
  children: ReactNode
}

export const Application: FC<ApplicationProps> = ({ children, getLayout }) => {
  getLayout ??= page => page

  return (
    <SSRProvider>
      <div className='max-w-full min-h-screen overflow-x-hidden bg-slate-200 text-neutral-800 dark:bg-gray-900 dark:text-neutral-100'>
        {getLayout(children)}
      </div>
    </SSRProvider>
  )
}
