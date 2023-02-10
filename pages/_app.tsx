import 'normalize.css'
import "@/styles/globals.scss"
import type { AppProps } from 'next/app'
import wrapper from '@/store/index'
import Layout from '../components/layout'
import { Provider } from 'react-redux'

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={ store } >
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  )
}
