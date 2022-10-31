import Script from 'next/script';
import '../ui/styles/Global.css';

import { Redux } from '../config/Redux';
import { Provider} from 'react-redux';
import { GlobalStyles } from '../ui/styles';

const Main = ({ Component, pageProps }) => {
  const { store, props } = Redux.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Script src="https://cdn.tailwindcss.com?plugins=forms" />
      <Component {...props} />
    </Provider>
  );
};

export default Main;
