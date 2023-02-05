import 'normalize.css'
import "@/styles/globals.scss"
import type { AppProps } from 'next/app'
import Layout from '../components/layout'

export default function App({ Component, ...rest }: AppProps) {
  return <Layout>
    <Component {...rest.pageProps} />
  </Layout>
}
