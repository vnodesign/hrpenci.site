import Link from '@components/Link'
import type { ShimmerButtonProps } from '@config/Type'
import cn from '@lib/cn'
import type { CSSProperties } from 'react'
import { Fragment } from 'react'

export default function ShimmerButton({
  shimmerColor = '#ffffff',
  shimmerSize = '1px',
  shimmerDuration = '1.5s',
  borderRadius = '100px',
  background = 'radial-gradient(ellipse 80% 50% at 50% 120%,rgba(62, 61, 117),rgba(18, 18, 38))',
  className,
  children,
  href,
  ...props
}: ShimmerButtonProps) {
  return (
    <Fragment>
      {href ? (
        <Link
          href={href}
          style={
            {
              '--spread': '90deg',
              '--shimmer-color': shimmerColor,
              '--radius': borderRadius,
              '--speed': shimmerDuration,
              '--cut': shimmerSize,
              '--bg': background
            } as CSSProperties
          }
          className={cn(
            'flex text-white dark:text-black group relative cursor-pointer overflow-hidden whitespace-nowrap h-11 px-10 [background:var(--bg)] [border-radius:var(--radius)] transition-all hover:scale-105 duration-300',
            className
          )}
          {...props}
        >
          <div className="absolute inset-0 overflow-visible [container-type:size]">
            <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
              <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
            </div>
          </div>
          <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
          {children}
        </Link>
      ) : (
        <button
          style={
            {
              '--spread': '90deg',
              '--shimmer-color': shimmerColor,
              '--radius': borderRadius,
              '--speed': shimmerDuration,
              '--cut': shimmerSize,
              '--bg': background
            } as CSSProperties
          }
          className={cn(
            'flex text-white dark:text-black group relative cursor-pointer overflow-hidden whitespace-nowrap h-11 px-10 [background:var(--bg)] [border-radius:var(--radius)] transition-all hover:scale-105 duration-300',
            className
          )}
          {...props}
        >
          <div className="absolute inset-0 overflow-visible [container-type:size]">
            <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
              <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
            </div>
          </div>
          <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
          {children}
        </button>
      )}
    </Fragment>
  )
}
