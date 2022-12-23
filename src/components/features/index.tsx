import cn from 'clsx'
import { motion } from 'framer-motion'

import * as styles from './style.module.scss'

export function Feature({
  children,
  className,
  index,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: Math.min(0.25 + index * 0.2, 0.8) }}
      className={cn(
        styles['feature'],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function Features({ children }) {
  return <>{children}</>
}
