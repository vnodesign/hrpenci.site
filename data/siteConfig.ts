import type { siteConfigProps } from 'Type'

export const siteConfig: siteConfigProps = {
  language: 'vi-VN',
  locale: 'vi_VN',
  siteTitle: 'HR Documentation',
  siteSubTitle: 'Nền tảng chia sẻ các kiến thức và tài liệu',
  siteDescription:
    'Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho HR.',
  siteUrl: 'https://hrpenci.site',
  siteImage: '/static/documentation-card.png',
  siteLogo: '/static/favicon.png',
  twitterHandle: 'tuanducdesigner',
  twitterSite: 'tuanducdesigner',
  fbAppId: '1031926270674334',
  fbAdmnId: '100005485267478',
  docsSwitcherTitle: 'Tài liệu phổ biến',
  docsSwitcherSite: [
    { name: 'Tài liệu Frontend', href: '/docs/front-end' },
    { name: 'Tài liệu ReactJS', href: '/docs/front-end/reactjs' },
    { name: 'Tài liệu VueJS', href: '/docs/front-end/vuejs' },
    { name: 'Tài liệu Backend', href: '/docs/back-end' },
    { name: 'Tài liệu NodeJS', href: '/docs/back-end/nodejs' },
    { name: 'Tài liệu Laravel', href: '/docs/back-end/laravel' }
  ],
  docsLink: [
    { name: 'Frontend', icon: 'TableLayout', href: '/docs/front-end' },
    { name: 'Backend', icon: 'Server', href: '/docs/back-end' },
    { name: 'Linux', icon: 'Server', href: '/docs/linux' },
    { name: 'Design', icon: 'SwatchBook', href: '/docs/design' }
  ],
  navigation: [
    {
      title: 'Tài liệu',
      items: [
        { name: 'Front End', href: '/docs/front-end' },
        { name: 'Back End', href: '/docs/back-end' },
        { name: 'Linux', href: '/docs/linux' },
        { name: 'Design', href: '/docs/design' }
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
      title: 'Liên kết',
      items: [
        { name: 'Giới thiệu', href: '/gioi-thieu' },
        { name: 'Bản quyền', href: '/ban-quyen' },
        { name: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
        { name: 'Điều khoản', href: '/dieu-khoan' }
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

export const DocsSwitcherSite = [
  { name: 'Tài liệu Frontend', href: '/docs/front-end' },
  { name: 'Tài liệu ReactJS', href: '/docs/front-end/reactjs' },
  { name: 'Tài liệu VueJS', href: '/docs/front-end/vuejs' },
  { name: 'Tài liệu Backend', href: '/docs/back-end' },
  { name: 'Tài liệu NodeJS', href: '/docs/back-end/nodejs' },
  { name: 'Tài liệu Laravel', href: '/docs/back-end/laravel' }
]

export const DocsLink = [
  { name: 'Frontend', icon: 'TableLayout', href: '/docs/front-end' },
  { name: 'Backend', icon: 'Server', href: '/docs/back-end' },
  { name: 'Linux', icon: 'Server', href: '/docs/linux' },
  { name: 'Design', icon: 'SwatchBook', href: '/docs/design' }
]

export const navigation = {
  docs: [
    { name: 'Front End', href: '/docs/front-end' },
    { name: 'Back End', href: '/docs/back-end' },
    { name: 'Linux', href: '/docs/linux' },
    { name: 'Design', href: '/docs/design' }
  ],
  help: [
    { name: 'Liên hệ', href: '/lien-he' },
    {
      name: 'GitHub issues',
      href: 'https://github.com/vnodesign/hr-document/issues'
    }
  ],
  links: [
    { name: 'Giới thiệu', href: '/gioi-thieu' },
    { name: 'Bản quyền', href: '/ban-quyen' },
    { name: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
    { name: 'Điều khoản', href: '/dieu-khoan' }
  ],
  software: [
    { name: '1Office', href: 'https://1office.vn' },
    { name: 'MISA AMIS', href: 'https://amis.misa.vn' },
    { name: 'HappyTime', href: 'https://happytime.vn' },
    { name: 'CoffeeHR', href: 'https://coffeehr.com.vn' }
  ]
}
