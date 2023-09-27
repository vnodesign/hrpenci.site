import type { ComponentProps, ReactElement } from 'react'

export default function SwatchBook(props: ComponentProps<'svg'>): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 512 512"
      {...props}
    >
      <title>Swatch Book</title>
      <path d="M0 416c0 53 43 96 96 96H456c30.9 0 56-25.1 56-56V376c0-30.9-25.1-56-56-56H331.7L419 232.7c21.9-21.9 21.9-57.3 0-79.2L362.4 97c-21.9-21.9-57.3-21.9-79.2 0L192 188.2V56c0-30.9-25.1-56-56-56H56C25.1 0 0 25.1 0 56V416zm456 64H171.7l128-128H456c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24zM396.4 210.1L192 414.5v-181L305.9 119.6c9.4-9.4 24.6-9.4 33.9 0l56.6 56.6c9.4 9.4 9.4 24.6 0 33.9zM96 480c-35.3 0-64-28.7-64-64l0-128H160V416c0 35.3-28.7 64-64 64zM32 256V160H160v96H32zm0-128V56c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24v72H32zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </svg>
  )
}
