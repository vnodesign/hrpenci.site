import Docs from './Docs'
import DocsBackEnd from './DocsBackEnd'
import DocsDesign from './DocsDesign'
import DocsFrontEnd from './DocsFrontEnd'
import DocsLinux from './DocsLinux'
import Hero from './Hero'

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
