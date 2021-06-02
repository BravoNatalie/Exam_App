import { ThemeProvider } from 'styled-components';
import { ExamContextProvider } from '../contexts/ExamContext';

import { Header } from  '../components/Header';

import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <ExamContextProvider>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </ExamContextProvider>
    </ThemeProvider>
  );
}

export default MyApp
