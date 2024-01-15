import type { AccordionProps, GenericAccordionProps } from '@config/Type'
import { cn } from '@utils/cn'
import { useState } from 'react'
import { ComponentIcon } from '../Icons'
import AccordionCover from './AccordionCover'
import getAccordionStyleFromVariant from './getAccordionStyleFromType'

function Accordion({
  title,
  description,
  defaultOpen = false,
  icon,
  children
}: AccordionProps) {
  const Icon =
    typeof icon === 'string' ? (
      <ComponentIcon icon={icon} className="size-4" />
    ) : (
      icon
    )

  return (
    <GenericAccordion
      title={title}
      description={description}
      defaultOpen={defaultOpen}
      icon={Icon}
    >
      {children}
    </GenericAccordion>
  )
}

function GenericAccordion({
  title,
  description,
  defaultOpen = false,
  icon,
  onChange,
  variant = 'rounded',
  children
}: GenericAccordionProps) {
  const [open, setOpen] = useState<boolean>(Boolean(defaultOpen))

  const onClickOpen = (open: boolean) => {
    setOpen(open)
    if (onChange) {
      onChange(open)
    }
  }

  const { parentClass, coverClass, contentClass } =
    getAccordionStyleFromVariant(variant)

  return (
    <div className={parentClass}>
      <AccordionCover
        title={title}
        description={description}
        open={open}
        setOpen={onClickOpen}
        icon={icon}
        coverClass={coverClass}
      />
      <div className={cn(contentClass, !open && 'hidden')}>{children}</div>
    </div>
  )
}

export default Accordion
