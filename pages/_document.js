import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
// Importing the Google Analytics Measurement ID from the environment variable
const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`
const isProd = process.env.NODE_ENV === 'production'

class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          {isProd && (
            <>
              {/* Google Analytics Measurement ID */}
              <script async src={gtag} />
              {/* Inject the GA tracking code with the measurement ID */}
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname
                });
              `
                }}
              />
            </>
          )}
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
