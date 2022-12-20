import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import React from 'react'
import { hydrateRoot } from 'react-dom/client'

import '../css/app.scss'

InertiaProgress.init()

void createInertiaApp({
  resolve: async name => await import(`./pages/${name}`).then(module => module.default),
  setup({ el, App, props }) {
    hydrateRoot(el, <App {...props} />)
  },
})
