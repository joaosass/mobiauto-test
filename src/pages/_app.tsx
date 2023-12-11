import '../styles/global.css';
import { FipeProvider } from '@/contexts/fipe';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <FipeProvider>
    <Component {...pageProps} />
  </FipeProvider>
}
