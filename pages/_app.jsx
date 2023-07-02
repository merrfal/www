import Script from "next/script";
import PropTypes from 'prop-types';

import "../ui/styles/merrfal.css";
import "../ui/styles/tailwind.css";

import { Redux } from "../configs/Redux";
import { Provider } from "react-redux";
import { Global } from "../configs/Head";

const Main = ({ Component, pageProps }) => {
  const { store, props } = Redux.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Global />
      <Component {...props} />
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
    </Provider>
  );
};

Main.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default Main;
