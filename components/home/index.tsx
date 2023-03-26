import React from 'react'
import Hero from '@components/home/Hero'
import Docs from '@components/home/Docs'
const DocsFrontEnd = React.lazy(() => import('@components/home/DocsFrontEnd'))
const DocsBackEnd = React.lazy(() => import('@components/home/DocsBackEnd'))
const DocsLinux = React.lazy(() => import('@components/home/DocsLinux'))
const DocsDesign = React.lazy(() => import('@components/home/DocsDesign'))

export default function Home() {
  return (
    <>
      <Hero />
      <Docs />
      <DocsFrontEnd />
      <DocsBackEnd />
      <DocsLinux />
      <DocsDesign />
    </>
  )
}
