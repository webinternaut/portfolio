import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Layout from '@/components/Layout';
import { AppProps } from 'next/app';

import "@fontsource/merriweather"; // Defaults to weight 400
import "@fontsource/merriweather/400.css"; // Specify weight
import "@fontsource/merriweather/400-italic.css"; // Specify weight and style

interface Props {
  children: React.ReactNode;
}



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;