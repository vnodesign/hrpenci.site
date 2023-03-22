/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import Link from 'next/link'

interface CustomLinkProps {
  href: string
  [key: string]: any
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <Link href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
