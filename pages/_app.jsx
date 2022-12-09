import "../ui/styles/merrfal.css";
import "../ui/styles/tailwind.css";

import Head from "next/head";
import Script from "next/script";

import { Redux } from "../config/Redux";
import { Provider } from "react-redux";
import { Meta } from "../config/Meta";

const Main = ({ Component, pageProps }) => {
  const { store, props } = Redux.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Meta />
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <Component {...props} />
    </Provider>
  );
};

export default Main;
