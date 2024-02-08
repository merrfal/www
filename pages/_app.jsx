import Script from "next/script"
import Head from "next/head"

import "../ui/styles/merrfal.css"
import "../ui/styles/tailwind.css"

import { Provider } from "react-redux"
import { Redux } from "../configs/Redux"
import { Translation } from "../utils/Translations"

const Main = ({ Component, pageProps }) => {
  const { store, props } = Redux.useWrappedStore(pageProps)

  return (
    <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />

        <meta name="author" content={Translation("merrfal")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...props} />
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
    
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-QK0N26T6LK`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QK0N26T6LK', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
    </Provider>
  )
}

export default Main
