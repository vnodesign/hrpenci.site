import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentInitialProps, DocumentContext } from "next/document";
import { FacebookProvider, CustomChat } from 'react-facebook'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="vi">
        <Head />
        <body>
          <Main />
          <NextScript />
          <FacebookProvider appId="294587991860787" chatSupport>
            <CustomChat pageId="121349286117840" minimized/>
          </FacebookProvider>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
