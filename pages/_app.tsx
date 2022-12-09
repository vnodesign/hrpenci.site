import type { AppProps } from 'next/app'
import type { ReactNode } from 'react'
import { FAQPageJsonLd, SocialProfileJsonLd, LogoJsonLd } from 'next-seo'
import ReactGA from 'react-ga4'
import '../scss/styles.scss'

type NextraAppProps = AppProps & {
  Component: AppProps['Component'] & {
    getLayout: (page: ReactNode) => ReactNode;
  };
};

export default function Nextra({ Component, pageProps }: NextraAppProps) {
  ReactGA.initialize('G-RCV263F7H7')
  ReactGA.send('pageview')

  return (
    <>
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'Tại sao bạn nên tham gia vào group HR Community?',
            acceptedAnswerText: 'Khi đến với group HR Community các bạn sẽ hiểu thêm về các khái niệm trong ngành IT và ngành Design hơn, bạn không cần phải tốn nhiều thời gian để Search Google đọc hàng tá các khái niệm trong ngành mà mình đang tuyển nữa. Giúp bạn hiểu xem Front End với Back End là gì, và trong nó có những công nghệ và Framework nào. Ngoài ra, trong nhóm HR Community mình có kho bài hướng dẫn chi tiết nhất về ngành IT và ngành Design cho các bạn mới bước chân vào ngành tuyển dụng.',
          },
          {
            questionName: 'Đâu là lý do để mình tạo ra nhóm HR Community này?',
            acceptedAnswerText: 'Mình nhận thấy nhu cầu làm HR của mọi người cũng nhiều, mà trang bị các kiến thức về ngành mà mình đang tuyển thì khá là ít. Mình tạo ra group không phải chỉ là để chia sẻ với các bạn, mà còn là nơi để các bạn đặt ra các vấn đề liên quan đến ngành mà các bạn đang tuyển. Một bạn HR mới bước chân vào nghề tuyển dụng, không chỉ hiểu thêm về các khái niệm trong ngành mà mình đang tuyển, thì họ còn hiểu thêm về nhiều cái khác nữa. Ngành IT hay ngành Design, thì khá là rộng, có hàng trăm, hàng ngàn thuật ngữ, mà để hiểu hết thì khá là lâu, và đó là lý do vì sao mình lại xây dựng ra group này.',
          },
        ]}
      />
      <SocialProfileJsonLd
        type="Person"
        name="HR Documentation"
        url="https://hr.penci.me"
        sameAs={[
          'https://www.facebook.com/groups/xomhr',
          'https://github.com/vnodesign',
        ]}
      />
      <LogoJsonLd
        logo="https://hr.penci.me/D7858306-BC38-4E7B-B7FE-0767CA0E5025.png"
        url="https://hr.penci.me"
      />
      <Component {...pageProps} />
    </>
  );
}
