import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/global/layout/layout';
import { getTiles } from '../../lib/wall'; 
import WallTile from './walltile/walltile';
import style from './index.module.css'

/*
pages/index.js is associated with the / route
pages/posts/first-post.js is associated with the /posts/first-post route

“Hey next, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”
            - in production mode runs at build time 
            - in development mode, runs on each request instead.
            - inside the function, you can fetch external data and send it as props to the page.*/
export async function getStaticProps() {
  const allWallTiles = await getTiles();

  return {
    props: {
      allWallTiles,
    }
  };
}

export default function Wall({ allWallTiles }) {

  function filterWall(event) {
  
    const search_term = event.target.value.toUpperCase();
    const div_posts = document.querySelectorAll("#postsContainer > div");
  
    Array.prototype.map.call(div_posts, div => {
   
      // All item (template name) are compared (case insensitive) with the search input
      let template_name = (div.textContent || div.innerText).toUpperCase();
  
      // Displays list items that are a match, and nothing if no match
      div.style.display = (template_name.indexOf(search_term) <= -1) ? "none" : "";
    });
  }

  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

      <div className='flexspacearound'>
        <h2 className={`${utilStyles.headingLg} colorGold`}>THE WALL</h2>
        <input type="search" className={style.search} onChange={filterWall} placeholder={`search in ${allWallTiles.length} tiles`}/> 
      </div> 

      <div id='postsContainer' className={style.postsContainer}>
        {allWallTiles.map(({id, tiletitle, tilesubtitle, content, image}) => (
          
          <WallTile key={id} {...{id, tiletitle, tilesubtitle, content, image }}/> 
          
        ))}
      </div>

      </section>
    </Layout>
  );
}