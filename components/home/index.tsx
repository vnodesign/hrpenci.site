import cn from '@lib/cn'
import CTA from './CTA'
import Docs from './Docs'
import FAQ from './FAQ'
import Hero from './Hero'
import Target from './Target'

export default function Home() {
  return (
    <>
      <div className="mb-20 overflow-hidden sm:mb-32 md:mb-40">
        <Hero />
      </div>
      <Docs />
      <div
        className={cn(
          'pt-10 mb-10 flex flex-col gap-y-10 overflow-hidden',
          'sm:pt-20 sm:mb-20 sm:gap-y-20 md:pt-20 md:mb-20 md:gap-y-20'
        )}
      >
        <Target />
        <FAQ />
        <CTA />
      </div>
    </>
  )
}
