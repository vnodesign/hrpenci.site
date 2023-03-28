import cn from 'clsx'
import { Callout } from '../Callout'
import Link from '../Link'
import Image from '../Image'

export const MDXComponents = {
  Callout: (props) => <Callout {...props} />,
  a: (props) => (
    <Link
      {...props}
      className="font-semibold !no-underline !border-b-[1px] !border-b-primary-600 hover:!border-b-2 !rounded-none"
    />
  ),
  blockquote: (props) => (
    <blockquote
      className={cn(
        'sm:my-[1.3333333333em] my-[1.6em] lg:my-[1.6666666667em] xl:my-[1.6em] 2xl:my-[1.7777777778em] border-gray-300 italic text-gray-700 dark:border-gray-700 dark:text-gray-400',
        'first:my-0 border-l-[0.25em] sm:pl-[1.1111111111em] pl-[1em] lg:pl-[1em] xl:pl-[1.0666666667em] 2xl:pl-[1.1111111111em] font-medium'
      )}
      {...props}
    />
  ),
  p: (props) => <p {...props} className="leading-7 [&:not(:first-child)]:mt-6" />,
  ul: (props) => <ul className="my-6 ml-6 list-disc" {...props} />,
  ol: (props) => <ol className="my-6 ml-6 list-decimal" {...props} />,
  li: (props) => <li className="mt-2" {...props} />,
  Image,
}
