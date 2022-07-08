import '../styles/index.scss';
import { appWithTranslation } from 'next-i18next';
import { ContextProvider } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default appWithTranslation(MyApp);
