﻿import React, { useEffect, useState } from "react";
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import style from '../../components/postitem/postitem.module.css';
import DateMonthAgo from '../../components/date';
import Keyword from '../../components/keyword/keyword';
import { MathJax } from "better-react-mathjax";
import { ConfigContext } from '../../components/configContext';

// Dynamic routes: /posts/<id> 	id: name of the markdown file 
// 1. A React component to render this page
export default function Post({ postData }) {
  const { id, contentHtml, title, abstract, keywords, image, date} = {...postData};
  const [ currentURL, setCurrentURL] = useState("");
  const [ pathTitle, setPathTitle] = useState("");

  useEffect(() => { 
    setCurrentURL( document.location.href);
    setPathTitle( document.title); 
  }, []);

  return (
    <ConfigContext.Consumer>
    { config =>
      <Layout>
        <MathJax>
                    
          <div className={`${style.postItem} margintop35`}
            style={{backgroundImage: `url(../${image})`}}>
                
                <a className={`glink ${style.posttitle}`}>
                  <h3 >{title}</h3>
                </a>

              <Keyword keywords={keywords}/>
              
              <small className={`${style.postdate} ${utilStyles.lightText}`}>
              🕑 <DateMonthAgo dateString={date} />
              </small>
          </div>

          <div className='flexcentercolunn'>
            <div>
              <h3 className={style.takeaway}>Take away</h3>
              <cite>{abstract}</cite>
              <hr class="hr-fade"/>
            </div>
            <div className={style.remarkHighlight} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>

          <div className='flexcentercolunn'>
            <div className='bolder'> Share on </div>
              <div className='flexspacearound vw10'> 
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(currentURL)}`} title="Facebook" aria-label="Facebook Share Button" tar="lank" rel="noreferrer" data-type="share">
                  <svg data-name="facebook" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width="35" height="35" fill="goldenrod" xmlns="http://www.w3.org/2000/svg">
                    <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"></path>
                  </svg>
                </a>              
                <a href={`https://twitter.com/intent/tweet?text=${encodeURI(pathTitle)}&url=${encodeURI(currentURL)}&via=`} title="Twitter" aria-label="Twitter Share Button" target="_blank" rel="noreferrer" data-type="share">
                  <svg data-name="twitter" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width="35" height="35" fill="goldenrod" xmlns="http://www.w3.org/2000/svg"><path d="m21.534 7.113c.976-.693 1.797-1.558 2.466-2.554v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.401.11-.837.162-1.29.162-.315 0-.633-.018-.931-.084.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 8.683 0 14.342-7.244 13.986-14.637z"></path></svg>
                </a>
              </div>               
          </div>

          <hr class="hr-fade"/>
          
          <div className='profileSizeContainer'>
              
              <span className='profileSize'>
								<img className='profile fade-in-down'
									src="/images/profile.jpg"
									height={200} width={200} alt={config.name} />
							</span>

            <div className='flexleftcolunn'>
               <div class="whoami__title"> Nicolas Guinet </div>
               <div class="whoami__desc">
                 Consultant .Net, C, C++, Python, Go. Full Stack Html/Css/Js/Node. I like to experiment new trends everyday. IA/ML player focused on scientific topics.
               </div>
               <div class="whoami__social">

                <a href="https://www.facebook.com/profile.php?id=100008401895918" title="facebook" aria-label="facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" version="1.1">
                    <path fill="white" d="M 11.664062 2.003906 C 6.621094 2.171875 2.375 6.25 2.023438 11.289062 C 1.65625 16.617188 5.46875 21.121094 10.507812 21.878906 L 10.507812 14.648438 L 8.890625 14.648438 C 8.164062 14.648438 7.578125 14.0625 7.578125 13.335938 C 7.578125 12.609375 8.164062 12.023438 8.890625 12.023438 L 10.503906 12.023438 L 10.503906 10.273438 C 10.503906 7.378906 11.914062 6.105469 14.324219 6.105469 C 14.679688 6.105469 14.984375 6.113281 15.242188 6.128906 C 15.878906 6.15625 16.371094 6.6875 16.371094 7.324219 C 16.371094 7.988281 15.835938 8.523438 15.171875 8.523438 L 14.730469 8.523438 C 13.710938 8.523438 13.351562 9.492188 13.351562 10.585938 L 13.351562 12.023438 L 15.222656 12.023438 C 15.8125 12.023438 16.265625 12.550781 16.175781 13.132812 L 16.066406 13.835938 C 15.992188 14.304688 15.589844 14.652344 15.113281 14.652344 L 13.351562 14.652344 L 13.351562 21.898438 C 18.234375 21.234375 22 17.0625 22 12 C 22 6.367188 17.339844 1.820312 11.664062 2.003906 Z M 11.664062 2.003906 "></path>
                  </svg>
                </a>

                <a href="https://github.com/guinetn" title="github" aria-label="github">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" version="1.1">
                    <path fill="white" d="M 10.898438 2.101562 C 6.300781 2.601562 2.601562 6.300781 2.101562 10.800781 C 1.601562 15.5 4.300781 19.699219 8.398438 21.300781 C 8.699219 21.398438 9 21.199219 9 20.800781 L 9 19.199219 C 9 19.199219 8.601562 19.300781 8.101562 19.300781 C 6.699219 19.300781 6.101562 18.101562 6 17.398438 C 5.898438 17 5.699219 16.699219 5.398438 16.398438 C 5.101562 16.300781 5 16.300781 5 16.199219 C 5 16 5.300781 16 5.398438 16 C 6 16 6.5 16.699219 6.699219 17 C 7.199219 17.800781 7.800781 18 8.101562 18 C 8.5 18 8.800781 17.898438 9 17.800781 C 9.101562 17.101562 9.398438 16.398438 10 16 C 7.699219 15.5 6 14.199219 6 12 C 6 10.898438 6.5 9.800781 7.199219 9 C 7.101562 8.800781 7 8.300781 7 7.601562 C 7 7.199219 7 6.601562 7.300781 6 C 7.300781 6 8.699219 6 10.101562 7.300781 C 10.601562 7.101562 11.300781 7 12 7 C 12.699219 7 13.398438 7.101562 14 7.300781 C 15.300781 6 16.800781 6 16.800781 6 C 17 6.601562 17 7.199219 17 7.601562 C 17 8.398438 16.898438 8.800781 16.800781 9 C 17.5 9.800781 18 10.800781 18 12 C 18 14.199219 16.300781 15.5 14 16 C 14.601562 16.5 15 17.398438 15 18.300781 L 15 20.898438 C 15 21.199219 15.300781 21.5 15.699219 21.398438 C 19.398438 19.898438 22 16.300781 22 12.101562 C 22 6.101562 16.898438 1.398438 10.898438 2.101562 Z M 10.898438 2.101562 "></path>
                  </svg>
                </a>

                <a href="https://www.linkedin.com/in/nicolas-guinet-23b03412" title="linkedin" aria-label="linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 30 30" width="25" height="25"><path fill="white" d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path></svg>
                </a>

                <a href="https://www.pinterest.fr/nguinet/" title="pinterest" aria-label="pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" version="1.1">
                  <path fill="white" d="M 12 2 C 6.476562 2 2 6.476562 2 12 C 2 16.238281 4.636719 19.855469 8.355469 21.3125 C 8.269531 20.519531 8.1875 19.308594 8.390625 18.445312 C 8.574219 17.664062 9.5625 13.472656 9.5625 13.472656 C 9.5625 13.472656 9.265625 12.875 9.265625 11.988281 C 9.265625 10.597656 10.070312 9.5625 11.074219 9.5625 C 11.925781 9.5625 12.339844 10.203125 12.339844 10.96875 C 12.339844 11.828125 11.792969 13.109375 11.511719 14.296875 C 11.273438 15.292969 12.007812 16.105469 12.992188 16.105469 C 14.769531 16.105469 16.132812 14.230469 16.132812 11.527344 C 16.132812 9.132812 14.414062 7.457031 11.957031 7.457031 C 9.113281 7.457031 7.441406 9.59375 7.441406 11.796875 C 7.441406 12.65625 7.773438 13.578125 8.1875 14.078125 C 8.269531 14.179688 8.277344 14.265625 8.253906 14.367188 C 8.179688 14.683594 8.011719 15.363281 7.976562 15.5 C 7.933594 15.683594 7.832031 15.722656 7.644531 15.632812 C 6.394531 15.050781 5.613281 13.226562 5.613281 11.761719 C 5.613281 8.605469 7.90625 5.707031 12.222656 5.707031 C 15.691406 5.707031 18.386719 8.179688 18.386719 11.484375 C 18.386719 14.929688 16.214844 17.703125 13.199219 17.703125 C 12.183594 17.703125 11.230469 17.175781 10.90625 16.554688 C 10.90625 16.554688 10.402344 18.464844 10.28125 18.933594 C 10.058594 19.800781 9.449219 20.890625 9.039062 21.554688 C 9.976562 21.84375 10.96875 22 12 22 C 17.523438 22 22 17.523438 22 12 C 22 6.476562 17.523438 2 12 2 Z M 12 2 "></path>
                </svg>
                </a>

                <a href="https://twitter.com/guinet_n" title="twitter" aria-label="twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32" version="1.1">
                  <path fill="white" d="M 28 8.558594 C 27.117188 8.949219 26.167969 9.214844 25.171875 9.332031 C 26.1875 8.722656 26.96875 7.757812 27.335938 6.609375 C 26.386719 7.171875 25.332031 7.582031 24.210938 7.804688 C 23.3125 6.847656 22.03125 6.246094 20.617188 6.246094 C 17.898438 6.246094 15.691406 8.453125 15.691406 11.171875 C 15.691406 11.558594 15.734375 11.933594 15.820312 12.292969 C 11.726562 12.089844 8.097656 10.128906 5.671875 7.148438 C 5.246094 7.875 5.003906 8.722656 5.003906 9.625 C 5.003906 11.332031 5.871094 12.839844 7.195312 13.722656 C 6.386719 13.695312 5.628906 13.476562 4.964844 13.105469 C 4.964844 13.128906 4.964844 13.148438 4.964844 13.167969 C 4.964844 15.554688 6.660156 17.546875 8.914062 17.996094 C 8.5 18.109375 8.066406 18.171875 7.617188 18.171875 C 7.300781 18.171875 6.988281 18.140625 6.691406 18.082031 C 7.316406 20.039062 9.136719 21.460938 11.289062 21.503906 C 9.605469 22.824219 7.480469 23.609375 5.175781 23.609375 C 4.777344 23.609375 4.386719 23.585938 4 23.539062 C 6.179688 24.9375 8.765625 25.753906 11.546875 25.753906 C 20.605469 25.753906 25.558594 18.25 25.558594 11.742188 C 25.558594 11.53125 25.550781 11.316406 25.542969 11.105469 C 26.503906 10.410156 27.339844 9.542969 28 8.558594 Z M 28 8.558594 "></path>
                </svg>
                </a>

              </div>
            </div>

          </div>

       </MathJax>
      </Layout>
    }
    </ConfigContext.Consumer>
    );
}

// 2. getStaticPaths which returns an array of possible values for id
export async function getStaticProps({ params }) {
  // Return a list of possible value for id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// 3. getStaticProps which fetches necessary data for the post with id
export async function getStaticPaths() {
  // Fetch necessary data for the blog post using params.id
  //   In development (npm run dev or yarn dev): getStaticPaths runs on every request.
  //   In production: getStaticPaths runs at build time.
  const paths = getAllPostIds();
  return {
    paths,
    //fallback: true,       // any paths not returned by getStaticPaths will result in a 404 page.
    fallback: false         // any paths not returned by getStaticPaths will result in a 404 page.
    //fallback: 'blocking', // new paths will be server-side rendered with getStaticProps, and cached for future requests so it only happens once per path.
  };
}
