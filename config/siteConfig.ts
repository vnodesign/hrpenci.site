import type { siteConfigProps } from './Type'

export const siteConfig: siteConfigProps = {
  language: 'vi-VN',
  locale: 'vi_VN',
  siteTitle: 'HR Documentation',
  siteSubTitle: 'Nền tảng chia sẻ kiến thức và tài liệu',
  siteDescription:
    'Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho HR.',
  siteUrl: 'https://hrpenci.site',
  siteImage: '/static/documentation-card.png',
  siteLogo: '/static/favicon.png',
  twitterHandle: 'tuanducdesigner',
  twitterSite: 'tuanducdesigner',
  githubUserName: 'vnodesign',
  githubRepoName: 'hr-document',
  heroTitle: 'Nền tảng chia sẻ kiến thức và tài liệu về IT và Design',
  heroSubTitle:
    'Nền tảng này được tạo ra với mong muốn giúp những người mới bước chân vào nghề tuyển dụng hiểu rõ hơn về các khái niệm trong lĩnh vực IT và Design.',
  heroImage: '/static/favicon.png',
  fbAppId: '1031926270674334',
  fbAdmnId: '100005485267478',
  fbFanpage: 'vnodesign',
  linkedIn: 'tuanductran',
  docsItem: [
    {
      name: 'Tài liệu về IT',
      icon: 'FileCode',
      desc: 'Tài liệu này dành cho các bạn đang tuyển dụng về IT.'
    },
    {
      name: 'Tài liệu về Design',
      icon: 'SwatchBook',
      desc: 'Tài liệu này dành cho các bạn đang tuyển dụng về Design.'
    }
  ],
  faqItem: [
    {
      question: 'Đâu là lý do để bạn xây dựng lên nền tảng này?',
      answer:
        'Mình thấy nhu cầu làm HR của mọi người cũng nhiều mà trang bị kiến thức về ngành IT và ngành Design này còn khá là ít, nên mình muốn chia sẻ một phần nào đó giúp các bạn HR hiểu rõ hơn.'
    },
    {
      question: 'Mục tiêu của nền tảng này là gì?',
      answer:
        'Mục tiêu chính của HR Documentation được thành lập ra là để chia sẻ những thông tin mà người sáng lập biết và muốn chia sẻ.'
    }
  ],
  navigation: [
    {
      title: 'Tài liệu phổ biến',
      items: [
        { name: 'Tài liệu Frontend', href: '/docs/front-end' },
        { name: 'Tài liệu ReactJS', href: '/docs/front-end/reactjs' },
        { name: 'Tài liệu VueJS', href: '/docs/front-end/vuejs' },
        { name: 'Tài liệu Backend', href: '/docs/back-end' },
        { name: 'Tài liệu NodeJS', href: '/docs/back-end/nodejs' },
        { name: 'Tài liệu Laravel', href: '/docs/back-end/laravel' }
      ]
    },
    {
      title: 'Công cụ AI',
      items: [
        { name: 'CareerFlow', href: 'https://careerflow.ai/' },
        {
          name: 'CareerFlow LinkedIn Review',
          href: 'https://www.careerflow.ai/linkedin-review'
        },
        {
          name: 'CareerFlow Job Tracker',
          href: 'https://www.careerflow.ai/job-tracker'
        },
        {
          name: '2000+ Best AI Tools',
          href: 'https://tuanductran.notion.site/8ef634b11aec4ec399a821261b23dc27?v=5ba68419fb0c4e96b0ad215ff168c000&pvs=4'
        }
      ]
    },
    {
      title: 'Liên kết',
      items: [
        { name: 'Giới thiệu', href: '/gioi-thieu' },
        { name: 'Bản quyền', href: '/ban-quyen' },
        { name: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
        { name: 'Điều khoản', href: '/dieu-khoan' }
      ]
    },
    {
      title: 'Trợ giúp & Hỗ trợ',
      items: [
        { name: 'Liên hệ', href: '/lien-he' },
        {
          name: 'GitHub issues',
          href: 'https://github.com/vnodesign/hr-document/issues'
        }
      ]
    },
    {
      title: 'Cộng đồng',
      items: [
        { name: 'HR Community', href: '/group-hr' },
        { name: 'Design Talks', href: '/group-design' }
      ]
    },
    {
      title: 'Phần mềm',
      items: [
        { name: '1Office', href: 'https://1office.vn' },
        { name: 'MISA AMIS', href: 'https://amis.misa.vn' },
        { name: 'HappyTime', href: 'https://happytime.vn' },
        { name: 'CoffeeHR', href: 'https://coffeehr.com.vn' }
      ]
    }
  ]
}
