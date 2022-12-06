import '../ui/styles/merrfal.css';
import '../ui/styles/tailwind.css';

import Head from 'next/head';
import Script from 'next/script';

import { Redux } from '../config/Redux';
import { Provider} from 'react-redux';

const Main = ({ Component, pageProps }) => {
  const { store, props } = Redux.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Head>
        <meta charSet='UTF-8' />
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
        <meta name='author' content='Merr Fal' /> 
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      
      <Component {...props} />
    </Provider>
  );
};

export default Main;
