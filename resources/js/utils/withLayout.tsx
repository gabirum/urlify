import React, { ComponentType, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

type ComponentWithLayout<P> = ComponentType<P> & { getLayout: (page: ReactNode) => ReactNode }

export function withLayout<P extends object>(component: ComponentType<P>, Layout: ComponentType<LayoutProps>) {
  const Component = component as ComponentWithLayout<P>

  Component.getLayout = page => <Layout>{page}</Layout>

  return Component
}
