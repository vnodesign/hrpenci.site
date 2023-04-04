import Hero from '@components/home/Hero'
import Docs from '@components/home/Docs'
import DocsFrontEnd from '@components/home/DocsFrontEnd'
import DocsBackEnd from '@components/home/DocsBackEnd'
import DocsLinux from '@components/home/DocsLinux'
import DocsDesign from '@components/home/DocsDesign'

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
