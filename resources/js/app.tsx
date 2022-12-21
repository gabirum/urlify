import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import React, { ReactNode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { Application } from './Application'

import '../css/app.scss'

InertiaProgress.init()

void createInertiaApp({
  resolve: async name => {
    const page = await import(`./pages/${name}`).then(module => module.default)
    page.layout = (_page: ReactNode) => <Application getLayout={page.getLayout}>{_page}</Application>
    return page
  },
  setup({ el, App, props }) {
    hydrateRoot(el, <App {...props} />)
  },
})
