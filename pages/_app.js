import React from "react";
import Router from "next/router";
import NProgress from "nprogress"
import { MathJaxContext } from "better-react-mathjax";
import { ConfigContextProvider } from '../components/global/configContext/configContext';
import config from '../config.json'
import "prismjs/themes/prism-tomorrow.css"; // Code Editor
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

// global styles are required to be added to `_app.js` per Next.js requirements.
import '../styles/global.css';
import "nprogress/nprogress.css";

export default function App({ Component, pageProps }) {

  React.useEffect(() => {

    // code syntax highlighting  
    document.body.classList.add('copy-to-clipboard', 'line-numbers');

    // 'NProgress' component at top of the site  
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
      <MathJaxContext>
          <Component {...pageProps} /> 
      </MathJaxContext>
    </ConfigContextProvider>)
}

