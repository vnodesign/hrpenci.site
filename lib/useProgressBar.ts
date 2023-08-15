import ProgressBar from '@badrap/bar-of-progress'
import { Router } from 'next/router'
import { useEffect } from 'react'

export default function useProgressBar() {
  useEffect(() => {
    const progress = new ProgressBar({
      size: 2,
      color: '#34B4F4',
      className: 'bar-of-progress',
      delay: 100
    })

    Router.events.on('routeChangeStart', () => progress.start())
    Router.events.on('routeChangeComplete', () => progress.finish())
    Router.events.on('routeChangeError', () => progress.finish())
  })
}
