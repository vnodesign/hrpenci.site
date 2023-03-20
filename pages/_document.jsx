import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import * as fs from 'fs'
import * as path from 'path'

class InlineStylesHead extends Head {
  getCssLinks(files) {
    return files.sharedFiles
      .filter((file) => /\.css$/.test(file))
      .filter((file) => fs.existsSync(path.join(process.cwd(), '.next', file)))
      .map((file) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${this.context.assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: fs.readFileSync(path.join(process.cwd(), '.next', file), 'utf-8'),
          }}
        />
      ))
  }
}

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="vi" prefix="og: https://ogp.me/ns#">
        <InlineStylesHead>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "Giới thiệu về HR Documentation",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "HR Documentation là một nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho những bạn HR mới bước chân vào nghề tuyển dụng."
                }
              },{
                "@type": "Question",
                "name": "Giới thiệu về HR Community",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Qua quá trình tìm kiếm các job về ngành IT và ngành Design, thì mình có nhận thấy rằng. Có rất ít bạn hiểu về các khái niệm trong ngành này, nên vì thế mình sẽ chia sẻ thêm một số kinh nghiệm giúp các bạn hiểu rõ về ngành IT và ngành Design này nhé, trước là để các bạn lấy kinh nghiệm, sau là để các bạn hiểu rõ hơn về bạn ứng viên đó, khi mà các bạn đã không hiểu về các khái niệm trong ngành mà mình đang tuyển, thì rất khó tìm được ứng viên, thậm chí còn làm mất thời gian của bạn ứng viên đó nữa."
                }
              }]
            }`,
            }}
          />
        </InlineStylesHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
