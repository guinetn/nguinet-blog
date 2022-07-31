import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import style from '../../components/postitem/postitem.module.css';
import DateMonthAgo from '../../components/date';
import Keyword from '../../components/keyword/keyword';

// Dynamic routes: /posts/<id> 	id: name of the markdown file 
// 1. A React component to render this page
export default function Post({ postData }) {
  const { id, contentHtml, title, abstract, keywords, image, date} = {...postData};
// export default function Post( { id, contentHtml, title, abstract, keywords, image, date}) {
  return (
      <Layout>
            
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
            <h3>Take away</h3>
            <cite>{abstract}</cite>
            <hr/>
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>

      </Layout>
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
