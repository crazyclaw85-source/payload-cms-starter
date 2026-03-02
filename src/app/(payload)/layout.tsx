import config from '@payload-config'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from './admin/importMap.js'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => {
  const serverFunction = (args: { args: Record<string, unknown>; name: string }) =>
    handleServerFunctions({ config, importMap, ...args })

  return RootLayout({ config, children, importMap, serverFunction })
}

export default Layout
