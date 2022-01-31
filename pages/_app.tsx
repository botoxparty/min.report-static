import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Marquee from '../components/Marquee'
var ReactGA = require('react-ga');

ReactGA.initialize('UA-160443890-1');

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <Marquee />
    <Component {...pageProps} />
  </>
}

export default MyApp
