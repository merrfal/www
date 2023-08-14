import Script from "next/script";

import "../ui/styles/merrfal.css";
import "../ui/styles/tailwind.css";

import { Redux } from "../configs/Redux";
import { Provider } from "react-redux";
import { Global } from "../configs/Head";
import { Translation } from "../utils/Translations";

const Main = ({ Component, pageProps }) => {
  const { store, props } = Redux.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Global title={Translation("merrfal-tagline")} description={Translation("merrfal-description")} />
      <Component {...props} />
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
    </Provider>
  );
};

export default Main;
