import cn from 'clsx'
import { motion } from 'framer-motion'

import * as styles from './style.module.scss'

export function Feature({
  large,
  centered,
  children,
  lightOnly,
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
        large && styles['feature__large'],
        centered && styles['feature__centered'],
        lightOnly && styles['light-only'],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function Features({ children }) {
  return <div className={styles['features']}>{children}</div>
}
