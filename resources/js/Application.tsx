import React, { ComponentType, FC, ReactNode } from 'react'
import { SSRProvider } from 'react-aria'

interface ApplicationProps {
  children: ReactNode
}

export const Application: FC<ApplicationProps> = ({ children }) => (
  <SSRProvider>
    <div className='max-w-full min-h-screen overflow-x-hidden bg-slate-200 text-neutral-800 dark:bg-gray-900 dark:text-neutral-100'>
      {children}
    </div>
  </SSRProvider>
)

export function withApplication<P extends JSX.IntrinsicAttributes>(Component: ComponentType<P>) {
  const ComponentWithApplication: FC<P> = props => (
    <Application>
      <Component {...props} />
    </Application>
  )

  return ComponentWithApplication
}
