import '../styles/globals.css'
import '../styles/Navbar.css';
import '../styles/activity.css';
import '../styles/book.css';
import '../styles/home.css';
import '../styles/books.css';
import '../styles/sidebar.css';
import '../styles/sections.css';
import '../styles/Footer.css';

import Layout from '../components/layout';
function MyApp({ Component, pageProps }) {

  return(
    <>
      <Layout>
        {Component.getLayout ? 
        <Component.getLayout>
        <Component {...pageProps} />
        </Component.getLayout>
        :<Component {...pageProps} />}
        </Layout>
        </>
  )
}

export default MyApp
