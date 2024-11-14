import { SessionProvider } from "next-auth/react"
import { AppProps } from 'next/app'
import '../styles/globals.css'; // Đảm bảo đường dẫn chính xác

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
