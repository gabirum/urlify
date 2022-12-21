import { Page, PageProps } from '@inertiajs/inertia'
import { createInertiaApp } from '@inertiajs/inertia-react'
import React, { ReactNode } from 'react'
import ReactDOMServer from 'react-dom/server'
import { Application } from './Application'

const render = async (page: Page<PageProps>) =>
  await createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: name => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const page = require(`./pages/${name}`).default
      page.layout = (_page: ReactNode) => <Application getLayout={page.getLayout}>{_page}</Application>
      return page
    },
    setup: ({ App, props }) => <App {...props} />,
  })

export default render
