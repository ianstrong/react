// import App from "next/app";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import NProgress from "nprogress";
import Router from "next/router";
import Sidebar from "../components/sidebar";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    Router.onRouteChangeStart = url => {
      NProgress.start();
    };
    // Remove animation on route complete/error
    Router.onRouteChangeComplete = () => NProgress.done();
    Router.onRouteChangeError = () => NProgress.done();
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container shadow">
        <div className="row">
          {pageProps.pokemons && (
            <div className="col-md-3 p-0">
              <Sidebar pokemon={pageProps.pokemons}></Sidebar>
            </div>
          )}
          <div className="col-md-8 my-auto">
            {pageProps.pokemon ? (
              <Component {...pageProps} />
            ) : (
              <h1 className="text-center ">Please pick a pokemon.</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
