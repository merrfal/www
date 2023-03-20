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
    </Provider>
  );
};

export default Main;
