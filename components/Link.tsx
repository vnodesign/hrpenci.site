import Link from 'next/link'
import type React from 'react'

interface CustomLinkProps {
  href: string
  [key: string]: any
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, ...rest }) => {
  const isInternalLink = href?.startsWith('/')
  const isAnchorLink = href?.startsWith('#')

  if (isInternalLink) {
    return <Link href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
