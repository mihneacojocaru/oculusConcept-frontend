import { ContextProvider } from '../context/StateContext';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
