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

          {/* Hotjar tracking code */}
          <Script>
            dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3497061,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
          }}
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
