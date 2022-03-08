import Head from "next/head";
import "../styles/globals.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LD Incorporadora Coworking</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
