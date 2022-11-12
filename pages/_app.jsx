import Script from 'next/script';
import Head from 'next/head';
import '../ui/styles/Global.css';

import { Redux } from '../config/Redux';
import { Provider} from 'react-redux';

const Main = ({ Component, pageProps }) => {
  const { store, props } = Redux.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Head>
        <title>Dhuro se nuk pakësohet - Merr Fal</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Script src="https://cdn.tailwindcss.com?plugins=forms" />
      <Component {...props} />
    </Provider>
  );
};

export default Main;
