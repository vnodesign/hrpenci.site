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
  fbFanpage: string
  linkedIn: string
  docsItem: DocsItem[]
  faqItem?: FAQItem[]
  navigation: FooterNavItem[]
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

export type AccordionProps = {
  title: string
  description?: string
  defaultOpen: boolean
  icon?: ReactNode | string
  children: ReactNode
}

export type GenericAccordionProps = {
  /** The main text of the Accordion shown in bold */
  title: string

  /** Text under the title */
  description?: string

  /** Whether the Accordion is open initially */
  defaultOpen?: boolean

  /** Icon to display to the left */
  icon?: ReactNode

  /** Callback when the Accordion is clicked with the new open state */
  onChange?: (open: boolean) => void

  /** The Accordion UI style */
  variant?: 'rounded' | 'minimalist'

  /** The Accordion contents */
  children: ReactNode
}

export type AccordionCoverProps = {
  title: string
  description?: string
  open: boolean
  setOpen: (open: boolean) => any
  icon?: ReactNode
  coverClass: string
}

export type ExpandableProps = {
  title: string
  defaultOpen?: boolean
  onChange?: (open: boolean) => void
  children: ReactNode
}

export type GenericExpandableProps = {
  title: string
  description?: string
  defaultOpen?: boolean
  onChange?: (open: boolean) => void
  children: ReactNode
}

export type ExpandableCoverProps = {
  title: string
  description?: string
  open: boolean
  setOpen: (open: boolean) => any
}

export type TabProps = {
  title: string
  isActive?: boolean
  children?: ReactNode
}

export interface ShimmerButtonProps {
  background?: string
  className?: string
  href?: string
  children: ReactNode
  [key: string]: any
}

export type GenericParamProps = {
  name: string
  type?: string
  defaultValue?: string
  required?: boolean
  optional?: string
  hidden?: boolean
  children: ReactNode
}

export type ResponseFieldProps = {
  name: string
  type: string
  hidden?: boolean
  default?: string
  required?: boolean
  optional?: string
  children: ReactNode
}
