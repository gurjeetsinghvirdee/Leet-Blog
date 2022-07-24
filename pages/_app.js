import { Component } from '../components/layout';
import '../styles/globals.css'

function MyApp ({ pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;