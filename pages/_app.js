import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import '../css/tailwind.css'

function MyApp ({ Component, pageProps }) {
  const isProd = process.env.NODE_ENV === 'production'
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      if (isProd) {
        window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
          page_path: url
        })
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.event.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
