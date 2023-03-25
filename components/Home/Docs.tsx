import Link from '../Link'

export default function Docs() {
  return (
    <section className="py-8 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight lg:text-center md:text-4xl">
          Tài liệu
        </h2>
        <p className="mb-10 text-lg font-normal lg:text-center lg:text-xl lg:px-64 lg:mb-16 dark:text-neutral-300">
          Tài liệu chi tiết và dễ hiểu, dễ tiếp cận với những bạn HR mới vào nghề.
        </p>
        <div className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-2 sm:gap-4 xl:gap-8 sm:space-y-0 md:mt-12">
          <Link
            href="/docs/front-end"
            title="Tài liệu về Front End"
            className="block px-8 py-12 text-center bg-gray-100 rounded-lg dark:bg-black"
          >
            <svg
              className="w-12 h-12 mx-auto"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            <h3 className="font-semibold mt-3.5 text-xl">Tài liệu về Front End</h3>
          </Link>
          <Link
            href="/docs/back-end"
            title="Tài liệu về Back End"
            className="block px-8 py-12 text-center bg-gray-100 rounded-lg dark:bg-black"
          >
            <svg
              className="w-12 h-12 mx-auto"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="7 8 3 12 7 16" />
              <polyline points="17 8 21 12 17 16" />
              <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
            <h3 className="font-semibold mt-3.5 text-xl">Tài liệu về Back End</h3>
          </Link>
          <Link
            href="/docs/linux"
            title="Tài liệu về Linux"
            className="block px-8 py-12 text-center bg-gray-100 rounded-lg dark:bg-black"
          >
            <svg
              className="w-12 h-12 mx-auto"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="4" width="18" height="8" rx="3" />
              <rect x="3" y="12" width="18" height="8" rx="3" />
              <line x1="7" y1="8" x2="7" y2="8.01" />
              <line x1="7" y1="16" x2="7" y2="16.01" />
            </svg>
            <h3 className="font-semibold mt-3.5 text-xl">Tài liệu về Linux</h3>
          </Link>
          <Link
            href="/docs/design"
            title="Tài liệu về Design"
            className="block px-8 py-12 text-center bg-gray-100 rounded-lg dark:bg-black"
          >
            <svg
              className="w-12 h-12 mx-auto"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
              <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
              <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
              <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
            </svg>
            <h3 className="font-semibold mt-3.5 text-xl">Tài liệu về Design</h3>
          </Link>
        </div>
      </div>
    </section>
  )
}
