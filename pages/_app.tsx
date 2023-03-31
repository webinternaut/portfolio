import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Layout from '@/components/Layout';
import { AppProps } from 'next/app';

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