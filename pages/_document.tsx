import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { GAScript } from "@components/GoogleAnalytics";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  };
  render() {
    return (
      <Html lang="vi" prefix="og: https://ogp.me/ns#">
        <Head />
        <body>
          <Main />
          <NextScript />
          <GAScript id="G-RCV263F7H7" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
