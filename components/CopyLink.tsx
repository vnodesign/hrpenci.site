import React from 'react'

function handleCopy(e) {
  const selection = window.getSelection().toString()
  if (selection && document) {
    const pagelink = `\n\nNguồn: ${document.location.href}`
    e.clipboardData.setData('text/plain', selection + pagelink)
    e.preventDefault()
  }
}

export default function CopyLink() {
  React.useEffect(() => {
    document.addEventListener('copy', handleCopy)
    return () => document.removeEventListener('copy', handleCopy)
  }, [])

  return null
}
