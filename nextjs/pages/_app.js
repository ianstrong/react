// import App from 'next/app'
import { useEffect } from "react";
import Header from "../components/Header";
import NProgress from "nprogress";
import Router from "next/router";
function MyApp({ Component, pageProps }) {
  console.log(pageProps);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    Router.onRouteChangeStart = url => {
      // Show NProgress animation...
      console.log(url);
      NProgress.start();
    };
    // Remove animation on route complete/error
    Router.onRouteChangeComplete = () => NProgress.done();
    Router.onRouteChangeError = () => NProgress.done();
  }, []);

  return (
    <div>
      {/* {pageProps.show && <aside>Sidebar</aside>} */}

      <Header />
      <Component {...pageProps} />
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
