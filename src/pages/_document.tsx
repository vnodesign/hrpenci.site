import Document, { Html, Head, Main, NextScript } from "next/document";
import { FAQPageJsonLd } from 'src/components/FAQPageJsonLd'
import { PersonJsonLd } from 'src/components/PersonJsonLd'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi" prefix="og: https://ogp.me/ns#">
        <Head>
          <FAQPageJsonLd />
          <PersonJsonLd />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
