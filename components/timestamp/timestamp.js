import React, { useEffect, useState, useRef } from "react";
import getCurrentTimestamp, {tools_init, timestampDecode, timestampEncode} from './timestamp_util.js'

export default function Timestamp() {

  // This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = (document) => {
      tools_init();
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  
  return (
    <>
      <section> 

          <div className="box3d">
            <h4>⭐Unix Timestamp (Unix epoch, Unix time, POSIX time)</h4>
            <small>Seconds elapsed since 01/01/1970 (midnight UTC/GMT). <br/>⚠ Issue on 32bits
              after 19/01/2038</small>
              <br />
            
            <div className="swiper-no-swiping">

              <input className='largetext' type="text" id="currentTimestamp" />
              <button className='bt-toolbox' onClick={getCurrentTimestamp}>Get current timestamp</button>
              <br />
              
              
              <input className='largetext' type="text" id="timestampToDecode" />
              <button className='bt-toolbox' onClick={timestampDecode}>Decode unixtimestamp</button>
              <cite id="timestampDecoded"></cite>
              <br />
              
              
              <input className='largetext' type="text" id="timestampToEncode" />
              <button className='bt-toolbox' onClick={timestampEncode}>Encode to unixtimestamp</button>
              <cite id="timestampEncoded"></cite>
              <br />
              <small>&nbsp; &nbsp; &nbsp;└── Iso 8601 Date: 2020-11-29T14:09:25.333Z</small>
                <br />
              <small><a className='glink'
                  href="https://www.epochconverter.com"
                  rel="noopener"
                  target="_blank"
                  >epochconverter.com</a></small>

            </div>
          </div>
       
        </section>
    </>
  );
}
