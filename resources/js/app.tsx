import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

import '../css/app.css'

InertiaProgress.init()

void createInertiaApp({
  resolve: async name => await import(`./pages/${name}`).then(module => module.default),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
