import React, { useContext, useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress"

import { ConfigContext, ConfigContextProvider } from '../components/configContext';
import config from '../config.json'


// global styles are required to be added to `_app.js` per Next.js requirements.
import '../styles/global.css';
import "nprogress/nprogress.css";

export default function App({ Component, pageProps }) {

  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return ( 
    <ConfigContextProvider config={config}>
      <Component {...pageProps} /> 
    </ConfigContextProvider>)
}

