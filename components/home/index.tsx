import dynamic from 'next/dynamic'
import Hero from '@components/home/Hero'
import Docs from '@components/home/Docs'
const DocsFrontEnd = dynamic(() => import('@components/home/DocsFrontEnd'))
const DocsBackEnd = dynamic(() => import('@components/home/DocsBackEnd'))
const DocsLinux = dynamic(() => import('@components/home/DocsLinux'))
const DocsDesign = dynamic(() => import('@components/home/DocsDesign'))

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
