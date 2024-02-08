import Script from "next/script"

import "../ui/styles/merrfal.css"
import "../ui/styles/tailwind.css"

import { Provider } from "react-redux"
import { Redux } from "../configs/Redux"

const Main = ({ Component, pageProps }) => {
  const { store, props } = Redux.useWrappedStore(pageProps)

  return (
    <Provider store={store}>
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
