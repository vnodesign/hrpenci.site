import { GitHubIcon } from 'nextra/icons'
import Link from './Link'

export default function Github() {
  return (
    <Link
      href="https://github.com/vnodesign/hr-document"
      className="hidden p-2 text-current sm:flex"
      title="GitHub Repository"
    >
      <GitHubIcon />
    </Link>
  )
}
