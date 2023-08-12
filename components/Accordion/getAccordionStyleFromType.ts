export default function getAccordionStyleFromVariant(variant: string) {
  if (variant === 'minimalist') {
    // Minimal padding. Shows a border along the left when open.
    return {
      parentClass: '',
      coverClass:
        '[&>div]:ml-2 py-1 text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-gray-500',
      contentClass:
        'mt-2 pt-1 mb-4 mx-[7px] px-4 border-l border-gray-200 dark:border-neutral-800'
    }
  }

  // Rounding is handled in Accordion by passing in isRounded to AccordionCover.
  return {
    parentClass:
      'border dark:border-neutral-800 rounded-xl mb-3 overflow-hidden dark:bg-vnodesign-100/5',
    coverClass:
      'py-4 px-5 space-x-2 hover:bg-gray-100 dark:hover:bg-vnodesign-100/5 rounded-t-xl',
    contentClass: 'pt-2 pb-4 px-6'
  }
}
