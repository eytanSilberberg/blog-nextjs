import '../styles/globals.css'
import Layout from '../cmps/layout/layout'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>

}

export default MyApp
