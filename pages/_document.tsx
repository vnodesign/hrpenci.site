import { existsSync, readFileSync } from 'fs'
import { join } from 'path'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import type { DocumentContext, DocumentInitialProps } from 'next/document'

class InlineStylesHead extends Head {
  getCssLinks(files) {
    return files.sharedFiles
      .filter(file => /\.css$/.test(file))
      .filter(file => existsSync(join(process.cwd(), '.next', file)))
      .map(file => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${this.context.assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: readFileSync(join(process.cwd(), '.next', file), 'utf-8')
          }}
        />
      ))
  }
}

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="vi" prefix="og: https://ogp.me/ns#">
        <InlineStylesHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
