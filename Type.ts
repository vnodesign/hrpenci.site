import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  Ref
} from 'react'

type SwitcherItem = {
  name: string
  href: string
}

type DocsLinkItem = {
  name: string
  icon: string
  href: string
}

type FooterNavItem = {
  title: string
  items: {
    name: string
    href: string
  }[]
}

export type siteConfigProps = {
  language: string
  locale: string
  siteTitle: string
  siteSubTitle: string
  siteDescription: string
  siteUrl: string
  siteImage: string
  siteLogo: string
  twitterHandle: string
  twitterSite: string
  fbAppId: string
  fbAdmnId: string
  docsSwitcherTitle: string
  docsSwitcherSite: SwitcherItem[]
  docsLink: DocsLinkItem[]
  navigation: FooterNavItem[]
  navigationBanner?: boolean
  navigationBannerTitle?: string
  navigationBannerText?: string
  navigationBannerLink?: string
  navigationBannerLinkTitle?: string
  navigationBannerLinkText?: string
}

export type Page = {
  route: string
  name: string
  meta?: {
    title?: string
  }
  frontMatter?: {
    title?: string
    description?: string
    date?: string
    image?: string
  }
}

export type CalloutProps = {
  children: ReactNode
  icon: ReactNode
  className: string
  childrenClassName: string
}

export type CalloutContent = { children: ReactNode }

export interface CardPropsBase<T> {
  /**
   * Large title above children.
   */
  title?: string
  /**
   * Icon to the top-left of the title. Can be a ReactNode or a string equal to an image source.
   */
  icon?: ReactNode
  /**
   * If provided, will render an image to the top of the card.
   */
  image?: string
  /**
   * Type of element to be rendered.
   */
  as?: T
  /**
   * If provided, will render as an anchor element.
   */
  href?: string
  /**
   * Ref of the element to be rendered.
   */
  mRef?: Ref<T | undefined>
}

/**
 * Props for the `Card` component
 * @typeParam T - Type of the Element rendered by the card.
 */
export type CardProps<T extends ElementType> = CardPropsBase<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof CardPropsBase<T>>

export interface CardGroupProps {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4
  className?: string
}
