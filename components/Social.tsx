import { GitHubIcon } from 'nextra/icons'
import Link from './Link'

export default function Github() {
  return (
    <Link
      href="https://github.com/vnodesign/hr-document"
      className="p-2 text-current"
      title="GitHub Repository"
    >
      <GitHubIcon />
    </Link>
  )
}
