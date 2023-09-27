import { siteConfig } from '@config/siteConfig'
import useRepositoryStars from '@lib/useRepositoryStars'
import { animated, config, useSpring } from '@react-spring/web'
import { useEffect, useState } from 'react'
import Link from './Link'

const counterFormatter = Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 7,
  maximumFractionDigits: 0
})

export default function RepositoryStarsCounter() {
  const [targetStars, setTargetStars] = useState<number>(0)
  const stars = useRepositoryStars()

  useEffect(() => {
    if (stars !== undefined) {
      setTargetStars(stars)
    }
  }, [stars])

  const spring = useSpring({
    from: { stars: 0 },
    stars: targetStars,
    config: config.molasses
  })

  return (
    <Link
      href={`https://github.com/${siteConfig.githubUserName}/${siteConfig.githubRepoName}`}
      className="mt-4 rounded-lg border border-transparent overflow-hidden bg-origin-border bg-gradient-to-r from-vnodesign-500 to-vnodesign-400 text-gray-500 dark:text-gray-400 w-full"
      title="Explore the Repository"
    >
      <div className="p-4 dark:bg-dark bg-white">
        <animated.p className="inline-block text-xl bg-gradient-to-r from-vnodesign-500 to-vnodesign-400 bg-clip-text text-transparent tabular-nums font-semibold">
          {spring.stars.to(t => counterFormatter.format(t))}
        </animated.p>
        <div className="text-xs">Total Stars</div>
        <div className="text-xs mt-4">Explore the Repository →</div>
      </div>
    </Link>
  )
}
