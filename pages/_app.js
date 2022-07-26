import React, { useContext } from "react";
import { ConfigContext, ConfigContextProvider } from '../components/configContext';
import config from '../config.json'
import '../styles/global.css';

export default function App({ Component, pageProps }) {

  return ( 
    <ConfigContextProvider config={config}>
      <div>
          <hr/>
          <Component {...pageProps} /> 
      </div>
    </ConfigContextProvider>)
}
