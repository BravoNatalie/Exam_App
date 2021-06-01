import { ThemeProvider } from 'styled-components';

import { Header } from  '../components/Header';

import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp
