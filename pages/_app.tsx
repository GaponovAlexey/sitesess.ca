import '../styles/index.css'
import '../styles/burger.css'
import type { AppProps } from 'next/app'
import "../firebase.ts";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
