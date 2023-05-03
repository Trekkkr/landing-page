import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import Link from 'next/link'

class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>

          <Script
            src='https://www.googletagmanager.com/gtag/js?id=G-PJN6FDG54F'
            strategy='afterInteractive'
          />

          <Script id='google-analytics' strategy='afterInteractive'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-PJN6FDG54F');
            `}
          </Script>

          <Link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap'
            rel='stylesheet'
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
