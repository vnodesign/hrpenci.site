import Link from '../Link'
import { BsGithub, BsFacebook } from 'react-icons/bs'

function Github() {
  return (
    <Link
      href="https://github.com/vnodesign/hr-document"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Repository HR Documentatation"
    >
      <BsGithub />
    </Link>
  )
}

function Facebook() {
  return (
    <Link
      href="https://www.facebook.com/groups/xomhr"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Group đăng tin tuyển dụng, tìm kiếm việc làm"
    >
      <BsFacebook />
    </Link>
  )
}

export default function Social() {
  return (
    <>
      <Facebook />
      <Github />
    </>
  )
}
