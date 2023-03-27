import cn from 'clsx'
import { Callout } from '../Callout'
import Link from '../Link'

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
  p: (props) => (
    <p
      {...props}
      className="sm:my-[1.1428571429em] my-[1.25em] lg:my-[1.3333333333em] xl:my-[1.2em] 2xl:my-[1.3333333333em] last:my-0"
    />
  ),
}
