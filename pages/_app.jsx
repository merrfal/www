import '../ui/styles/merrfal.css';
import '../ui/styles/tailwind.css';

import { Redux } from '../config/Redux';
import { Provider} from 'react-redux';

const Main = ({ Component, pageProps }) => {
  const { store, props } = Redux.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

export default Main;
