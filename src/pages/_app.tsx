import { AppProps } from 'next/app';
import { Header } from '../components/Header';

//import Provider as NextAuthProvider  from 'next-auth/providers/github';

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp
