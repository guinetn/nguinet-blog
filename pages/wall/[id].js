﻿import Layout from '../../components/layout';
import { getAllWallIds, getWallData } from '../../lib/wall';
import utilStyles from '../../styles/utils.module.css';
import style from './id.module.css';
import WallRow from '../../components/wall/wallrow/wallrow';

// Dynamic routes: /posts/<id> 	id: name of the markdown file 
// 1. A React component to render this page
export default function Wall({ wallData }) {
  console.log('------------------------------------------------');
  console.log({wallData});
  const { id, contentHtml, title, sidetitle, image, wallRows} = {...wallData};

  function onClick(event) {
    

    event.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
		console.log('click ' + event.target.nodeName);
		console.log('click ' + event.target.classList);

		if (event.target.classList.contains('wall')) {
			console.log("dialog_details.close();");
		}
		else if (event.target.classList.toString().indexOf("sidetitle")>=0) {
			const closestContainer = event.target.closest("section");
			if (closestContainer?.classList.toString().indexOf('container')>=0) {
				closestContainer.style.left = 0;
			}
		}
		else if (event.target.classList.toString().indexOf('copyable')>=0) {
			const stringToCopy = event.target.innerText;
			try {
					navigator.clipboard.writeText( stringToCopy ).then( ()=>{ console.log('ok');});
		  	} catch (err) {
		      console.error(`Failed to copy ${stringToCopy}`, err);
				}
			} else if (event.target.classList.toString().indexOf('articleContent')>=0 || event.target.classList.toString().indexOf('item')>=0) {
			  console.log("dialog_details.showModal('1234');");
			}
  }

  return (
      <Layout>
                    
          <div className='wall' onClick={(e)=>onClick(e)}>
                
              <h1 >{title} (folder {id})</h1>
                {/* <a className={`glink ${style.posttitle}`}>
                  <h3 >{sidetitle}</h3>
                  <h3 >{image}</h3>
                </a> */}

              {wallRows.map(({folder, title, sidetitle, content, image}) => (
                        
                <WallRow key={folder} {...{title, sidetitle, content, image }}/>
                
              ))}
               
          </div>
       
      </Layout>
  );
}

// 2. getStaticPaths which returns an array of possible values for id
export async function getStaticProps({ params }) {
  // Return a list of possible value for id
  const wallData = await getWallData(params.id);
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
  const paths = getAllWallIds();
  return {
    paths,
    //fallback: true,       // any paths not returned by getStaticPaths will result in a 404 page.
    fallback: false         // any paths not returned by getStaticPaths will result in a 404 page.
    //fallback: 'blocking', // new paths will be server-side rendered with getStaticProps, and cached for future requests so it only happens once per path.
  };
}


/*

wallData:
  id: "rust"
  title: "RUST LANG"
  subtitle: "RUST-1 ↓ ↓"
  image: "images/posts/solen-feyissa-tSfSZb-eocE-unsplash.jpg"
  contentHtml: "<p>A responsive portfolio site<br />\r\ntemplate by HTML5 UP</p>\n"

  wallRows: Array(2)
    0: {folder: 'rust/cargo', title: 'cargo', sidetitle: 'cargo-1', image: 'images/posts/alexander-ant-hheHwahRhA4-unsplash.jpg', content: '<p>A rust résumé site<br />\r\ntemplate by HTML5 UP</p>'}
    1: {folder: 'rust/rust', title: 'rust 2', sidetitle: 'rust ↓', image: 'images/posts/solen-feyissa-tSfSZb-eocE-unsplash.jpg', content: '<p>A rust portfolio site<br />\r\ntemplate by HTML5 UP</p>'}


*/