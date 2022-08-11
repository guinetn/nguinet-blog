import Layout from '../../components/global/layout/layout';

import { getAllTilesIds, getRowsOfTiles } from '../../lib/wall';
import WallRow from './wallrow/wallrow';
import { useState } from "react";
import SwipeModal from '../../components/modal/swipemodal/swipemodal';

// Dynamic routes: /posts/<id> 	id: name of the markdown file 
// 1. A React component to render this page
export default function Wall({ wallData }) {
  // console.log('------------------------------------------------');
  // console.log({wallData});
  const { folder, head, body, wallRows} = {...wallData};
  /*
  wallData:
    contentHtml: "<p>A rust résumé site<br />\r\ntemplate by HTML5 UP</p>\n"
    folder: "rust"
    image: "images/posts/solen-feyissa-tSfSZb-eocE-unsplash.jpg"
    tilesubtitle: "RUST subtitle"
    tiletitle: "RUST LANG"
    wallRows: Array(2)
      0:
        content: "<p>A rust résumé site<br />\r\ntemplate by HTML5 UP</p>"
        folder: "rust/cargo"
        image: "images/posts/alexander-ant-hheHwahRhA4-unsplash.jpg"
        sidetitle: "cargo-1 ↓"
        tiles: Array(4)
          0:
            content: "\r\n<button class=\"copyable button-30\" role=\"button\">cursor: msgkkgso</button>\r\n<button class=\"copyable button-30\" role=\"button\">cursor: msgkkqsfsq</button>\r\n<p>cursor: pointer</p>\r\n<button class=\"copyable button-30\" role=\"button\">cursor: msgkkqsfsq</button>\r\n"
            image: "images/posts/greg-rakozy-0LU4vO5iFpM-unsplash.jpg"
            slides: (4) [{…}, {…}, {…}, {…}]
            title: "Linq"
      1: ...
  */

  const [slides, setSlides] = useState( {
    title:'',
    slides: ''
  });
  const [isOpened, setIsOpened] = useState(false);

  function onClick(event) {
  
    //event.preventDefault();
		//console.log('click ' + event.target.nodeName);
		//console.log('click ' + event.target.classList);

    if (event.target.classList.toString().indexOf("sidetitle")>=0) {
			const closestContainer = event.target.closest("section");
			if (closestContainer?.classList.toString().indexOf('container')>=0) {
				closestContainer.style.left = 0;
			}
		}
		else if (event.target.classList.toString().indexOf('copyable')>=0) {
			const stringToCopy = event.target.innerText;
			try {
					navigator.clipboard.writeText( stringToCopy );
		  	} catch (err) {
		      console.error(`Failed to copy ${stringToCopy}`, err);
				}
			} else if (event.target.classList.toString().indexOf('articleContent')>=0 || event.target.classList.toString().indexOf('item')>=0) {
        const closestArticle = event.target.closest("article");
        if (closestArticle===null)
        return;
        const title = closestArticle.querySelector("h2").innerText;
        const children = closestArticle.querySelector("data").innerHTML.split('<div>slide-separator</div>');
        setIsOpened(true);
        setSlides( {title: title, slides:children });
			}
  }

  return (
      <Layout>
          <div className='wall overflowhidden' onClick={(e)=>onClick(e)}>
                
            <h1>{head.tiletitle} <sub> <small> {head.tilesubtitle}</small></sub></h1>

            <SwipeModal
                slides={slides}
                isOpened={isOpened}
                onClose={() => setIsOpened(false)}>

                {/* CHILDREN */}
                <p>To close: click Close, press Escape, or click outside.</p>
            
            </SwipeModal>

            {wallRows.map(({folder, head, body, tiles}) => (
              <WallRow key={folder} {...{folder, head, body, tiles }}/>  
            ))}
               
          </div>
       
      </Layout>
  );
}

// 2. getStaticPaths which returns an array of possible values for id
export async function getStaticProps({ params }) {
  // Return a list of possible value for id
  const wallData = await getRowsOfTiles(params.id);
  return {
    props: {
      wallData,
    },
  };
}

// 3. getStaticProps which fetches necessary data for the post with id
export async function getStaticPaths() {
  // Fetch necessary data for the blog post using params.id
  //   In development (npm run dev or yarn dev): getStaticPaths runs on every request.
  //   In production: getStaticPaths runs at build time.
  const paths = getAllTilesIds();
  return {
    paths,
    fallback: false         // any paths not returned by getStaticPaths will result in a 404 page.
  };
}
