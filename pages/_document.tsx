import { siteConfig } from '@data/siteConfig'
import { Head, Html, Main, NextScript } from 'next/document'
import fs from 'fs'
import path from 'path'

type DocumentFiles = {
  sharedFiles: readonly string[]
}

class InlineStylesHead extends Head {
  getCssLinks(files: DocumentFiles) {
    return files.sharedFiles
      .filter((file) => /\.css$/.test(file))
      .filter((file) =>
        fs.existsSync(path.join(process.cwd(), '.next', file))
      )
      .map((file) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${this.context.assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: fs.readFileSync(
              path.join(process.cwd(), '.next', file),
              'utf-8'
            ),
          }}
        />
      ));
  }
}

export default function Document() {
  return (
    <Html lang={siteConfig.language} prefix="og: https://ogp.me/ns#">
      <InlineStylesHead />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
