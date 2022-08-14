import React, { useEffect, useState, useRef } from "react";
import Layout from '../../components/global/layout/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import style from './postitem/postitem.module.css';
import SocialBar from '../../components/social_bar/social_bar';
import DateMonthAgo from '../../components/date/date';
import Keyword from '../../components/keyword/keyword';
import { MathJax } from "better-react-mathjax";
import { ConfigContext } from '../../components/global/configContext/configContext';

// Dynamic routes: /posts/<id> 	id: name of the markdown file 
// 1. A React component to render this page
export default function Post({ postData }) {

  const { id, contentHtml, title, abstract, keywords, image, date} = {...postData};
  const [ currentURL, setCurrentURL] = useState("");
  const [ pathTitle, setPathTitle] = useState("");

  const rootRef = useRef(null);
  
  useEffect(() => { 
    setCurrentURL( document.location.href);
    setPathTitle( document.title); 

    const allPres = rootRef.current.querySelectorAll("pre");
    let a = 13/0;
    for (const pre of allPres) {
      const code = pre.firstElementChild;
      if (!code || !/code/i.test(code.tagName)) {
        continue;
      }
      pre.appendChild(createCopyButton(code));
    }

  }, []);

  function createCopyButton(codeEl) {
    if (!navigator.clipboard) 
      return;

    const button = document.createElement("button");
    button.classList.add("prism-copy-button");
    button.textContent = "📋";
    
    button.addEventListener("click", () => {
      console.log("click");
      if (button.textContent === "👍") {
        return;
      }
      navigator.clipboard.writeText(codeEl.textContent || "").then(function () {
        button.textContent = "👍";
        button.disabled = true;
        button.classList.add('shine');
        setTimeout(() => {
          button.textContent = "📋";
          button.disabled = false;
          button.classList.remove('shine');
        }, 3000);
      });
    });
  
    return button;
  }

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
              <hr className="hr-fade"/>
            </div>
            <div ref={rootRef} 
                 className={style.remarkHighlight} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>

          <div className='flexcentercolunn'>
            <h3 className='bolder'> Share on </h3>
            <div className='flexspacearound vw10'> 
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(currentURL)}`} title="Facebook" aria-label="Facebook Share Button" tar="lank" rel="noreferrer" data-type="share">
                <svg data-name="facebook" viewBox="0 0 24 24" width="35" height="35" fill="goldenrod" xmlns="http://www.w3.org/2000/svg">
                  <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"></path>
                </svg>
              </a>              
              <a href={`https://twitter.com/intent/tweet?text=${encodeURI(pathTitle)}&url=${encodeURI(currentURL)}&via=`} title="Twitter" aria-label="Twitter Share Button" target="_blank" rel="noreferrer" data-type="share">
                <svg data-name="twitter" viewBox="0 0 24 24" width="35" height="35" fill="goldenrod" xmlns="http://www.w3.org/2000/svg"><path d="m21.534 7.113c.976-.693 1.797-1.558 2.466-2.554v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.401.11-.837.162-1.29.162-.315 0-.633-.018-.931-.084.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 8.683 0 14.342-7.244 13.986-14.637z"></path></svg>
              </a>
            </div>               
          </div>

          <hr className="hr-fade"/>
          
          <div className='profileSizeContainer'>
              
              <span className='profileSize'>
								<img className='profile fade-in-down'
									src="/images/profile.jpg"
									height={200} width={200} alt={config.name} />
							</span>

            <div className='flexleftcolunn'>
               <div className="whoami__title"> Nicolas Guinet </div>
               <div className="whoami__desc">
                 Consultant .Net, C, C++, Python, Go. Full Stack Html/Css/Js/Node. I like to experiment new trends everyday. IA/ML player focused on scientific topics.
               </div>
               <SocialBar/>
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
    fallback: false         // any paths not returned by getStaticPaths will result in a 404 page.
  };
}
