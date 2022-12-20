import { Page, PageProps } from '@inertiajs/inertia'
import { createInertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const render = async (page: Page<PageProps>) =>
  await createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: name => require(`./pages/${name}`),
    setup: ({ App, props }) => <App {...props} />,
  })

export default render
