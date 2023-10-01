import { siteConfig } from '@config/siteConfig'
import Container from './Container'

export default function FAQ() {
  return (
    <div>
      <Container>
        <div className="mt-32 flex flex-col gap-12 lg:flex-row">
          <div className="md:w-7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-100">
              Câu hỏi thường gặp
            </h2>
            <p className="text-lg mt-4 text-slate-700 dark:text-slate-200">
              Tìm kiếm các câu hỏi thường gặp khi sử dụng HR Documentation.
            </p>
          </div>
          <div className="md:w-7/12 lg:w-1/2">
            <Disclosures />
          </div>
        </div>
      </Container>
    </div>
  )
}

function Disclosures() {
  return (
    <dl className="space-y-6">
      {siteConfig.faqItem.map((item, index) => (
        <div key={`faq-item-${index}`}>
          <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
            {item.question}
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
            {item.answer}
          </dd>
        </div>
      ))}
    </dl>
  )
}
