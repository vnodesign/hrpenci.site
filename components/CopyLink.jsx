import React from 'react'

export default function CopyLink() {
  function addLink(e) {
    const selection = window.getSelection().toString()
    if (selection) {
      const pagelink = `\n\nNguồn: ${document.location.href}\n`
      e.clipboardData.setData('text/plain', selection + pagelink)
      e.preventDefault()
    }
  }

  React.useEffect(() => {
    document.addEventListener('copy', addLink)
    return () => document.removeEventListener('copy', addLink)
  }, [])

  return null
}
