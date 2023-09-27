import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  Ref
} from 'react'

type DocsItem = {
  name: string
  desc?: string
  href?: string
  icon?: string
}

type FAQItem = {
  question: string
  answer: string
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
  githubUserName: string
  githubRepoName: string
  heroImage?: string
  heroTitle: string
  heroSubTitle: string
  fbAppId: string
  fbAdmnId: string
  docsItem: DocsItem[]
  faqItem?: FAQItem[]
  navigation: FooterNavItem[]
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

export interface ShimmerButtonProps {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  href?: string
  children?: ReactNode
  [key: string]: any
}
