import React, { useEffect, useState, useRef } from "react";
import processRegex from './regex_util.js'
import style from './regex.module.css';

export default function Regex() {

  return (
    <>
     <section> 

            <div className="box3d">
              <h4>⭐Regex</h4>
              <div className="flexleftcolunn swiper-no-swiping">
                <small>Pattern <input type="checkbox" className={style.regexPattern} title="ignore case" />i
                  <input type="checkbox" defaultChecked className={style.regexPattern} title="global" />g
                  <input type="checkbox" className={style.regexPattern} title="multiline" />m
                </small>
                <input className={style.regexPattern} type="text" id="regexPattern" placeholder="regex pattern"
                  defaultValue='(?<proto>https?://(?<url>[^"]*))' onChange={processRegex}/>

                <small>String to test</small>
                <textarea rows="4" cols="96" id="regexInput" className={style.regexPattern} placeholder="Test string" onChange={processRegex}
                    defaultValue = ' "hosting": [ "https://www.netlify.com", "https://surge.sh(surge.sh: publish static web)", "https://vercel.com(websites, serverless APIs. Free, easy)",'>
                </textarea>
                <small>Result. Evaluated at each pattern/test string keydown</small>
                <textarea rows="20" cols="96" id="regexOutput" className={style.regexPattern}  placeholder="Regex result"></textarea>
              </div>
            </div>
           
        </section>
    </>
  );
}
