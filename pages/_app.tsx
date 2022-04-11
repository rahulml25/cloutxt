import 'styles/globals.css';
import Head from 'next/head';
import Navbar from 'components/navbar';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" type="image/x-icon"/>
      </Head>

      <Navbar/>
  	  <Component {...pageProps} />
  	</>
  )
}

export default App;
