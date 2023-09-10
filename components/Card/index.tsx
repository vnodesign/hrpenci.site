import cn from 'clsx'
import isAbsoluteUrl from 'is-absolute-url'
import Link from 'next/link'
import type { ComponentType, ElementType, ReactNode, Ref } from 'react'
import { forwardRef } from 'react'
import type { CardGroupProps, CardProps } from 'Type'
import { ComponentIcon } from '../Icons'
import Image from '../Image'

function Card({
  title,
  icon,
  href,
  children
}: {
  title?: string
  icon?: ReactNode | string
  href?: string
  children?: ReactNode
}) {
  const Icon = (
    <ComponentIcon icon={icon} className="h-6 w-6 fill-vnodesign-600" />
  )

  // Using 'a' because href is passed, which makes the card an anchor element.
  const props: CardProps<'a'> = {
    as: 'a',
    className: cn(
      href && 'hover:border-vnodesign-500 dark:hover:border-vnodesign-400'
    ),
    title,
    icon: Icon,
    href,
    children
  }

  // Resolves `Function components cannot be given refs` warning.
  const RefCard = forwardRef<'a', CardProps<'a'>>((args, ref) => (
    <GenericCard {...args} mRef={ref} />
  ))
  RefCard.displayName = 'RefCard'

  // We don't use DynamicLink because we cannot wrap the Card in an extra <a> tag without
  // messing with the Card's styling. The Card already sets an <a> tag when href is passed to it.
  if (href && (href.startsWith('/') || href.startsWith('#'))) {
    return (
      <Link href={href} passHref legacyBehavior>
        <RefCard {...props} />
      </Link>
    )
  }

  return <GenericCard {...props} />
}

function GenericCard<T extends ElementType = 'div'>({
  title,
  icon,
  image,
  className,
  children,
  as,
  mRef,
  ...props
}: CardProps<T>) {
  /**
   * If provided, use `as` or an `a` tag if linking to things with href.
   * Defaults to `div`.
   */
  const Component = as || props.href != undefined ? 'a' : 'div'

  const openLinksInNewTab = isAbsoluteUrl(props.href ?? '')
  const newTabProps = openLinksInNewTab
    ? { target: '_blank', rel: 'noreferrer' }
    : {}

  const isImageSrc: boolean = typeof icon === 'string'

  const renderIcon: JSX.Element = (
    <>
      {icon ? (
        isImageSrc ? (
          <Image
            src={icon as string}
            alt={title}
            className="h-6 w-6 object-cover object-center"
            width="26"
            height="26"
            decoding="async"
            loading="lazy"
          />
        ) : (
          <div className="h-6 w-6 fill-gray-800 dark:fill-gray-100 text-gray-800 dark:text-gray-100">
            {icon}
          </div>
        )
      ) : null}
    </>
  )

  return (
    <Component
      className={cn(
        'block font-normal relative my-2 ring-2 ring-transparent rounded-xl dark:bg-dark border border-neutral-100 shadow-md bg-white dark:shadow-none shadow-neutral-300/10 dark:border-neutral-800/50 overflow-hidden w-full',
        props.href && 'cursor-pointer',
        className
      )}
      {...newTabProps}
      {...props}
      ref={mRef as Ref<never>}
    >
      {image && (
        <Image
          src={image}
          alt={title}
          className="w-full h-64 object-cover object-center"
          width="1200"
          height="256"
          decoding="async"
          loading="lazy"
        />
      )}
      <div className="px-6 py-5">
        {renderIcon}
        <h2
          className={cn(
            'font-semibold text-base text-gray-800 dark:text-white',
            icon !== null && icon !== undefined && 'mt-4'
          )}
        >
          {title}
        </h2>
        <span
          className={cn(
            'mt-1 font-normal',
            title
              ? 'text-gray-600 dark:text-gray-400'
              : 'text-gray-700 dark:text-gray-300'
          )}
        >
          {children}
        </span>
      </div>
    </Component>
  )
}

function CardGroup({ children, cols = 2, className }: CardGroupProps) {
  let CardGroupComponent: ComponentType<CardGroupProps>

  switch (cols) {
    case 1:
      CardGroupComponent = CardGroupOne
      break
    case 2:
      CardGroupComponent = CardGroupTwo
      break
    case 3:
      CardGroupComponent = CardGroupThree
      break
    case 4:
      CardGroupComponent = CardGroupFour
      break
    default:
      CardGroupComponent = CardGroupTwo
  }

  return (
    <CardGroupComponent className={className}>{children}</CardGroupComponent>
  )
}

function CardGroupOne({ children, className }: CardGroupProps) {
  return (
    <div className={cn('grid sm:grid-cols-1 gap-x-4', className)}>
      {children}
    </div>
  )
}

function CardGroupTwo({ children, className }: CardGroupProps) {
  return (
    <div className={cn('grid sm:grid-cols-2 gap-x-4', className)}>
      {children}
    </div>
  )
}

function CardGroupThree({ children, className }: CardGroupProps) {
  return (
    <div className={cn('grid sm:grid-cols-3 gap-x-4', className)}>
      {children}
    </div>
  )
}

function CardGroupFour({ children, className }: CardGroupProps) {
  return (
    <div className={cn('grid sm:grid-cols-4 gap-x-4', className)}>
      {children}
    </div>
  )
}

export { Card, CardGroup }
