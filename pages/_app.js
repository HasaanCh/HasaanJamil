import '../styles/globals.css'
import Layout from '../components/layout.component';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";





Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
   
  )
}

export default MyApp
