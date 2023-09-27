import type { ComponentProps, ReactElement } from 'react'

export default function Folder(props: ComponentProps<'svg'>): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 512 512"
      {...props}
    >
      <title>Folder</title>
      <path d="M64 464H448c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48H301.3c-12.7 0-24.9-5.1-33.9-14.1L231.4 62.1c-9-9-21.2-14.1-33.9-14.1H64C37.5 48 16 69.5 16 96V416c0 26.5 21.5 48 48 48zm384 16H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H197.5c17 0 33.3 6.7 45.3 18.7l35.9 35.9c6 6 14.1 9.4 22.6 9.4H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z" />
    </svg>
  )
}
