import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';  // use FRONT MATTER lib to extract post header
import Link from 'next/link';
import Date from '../../components/date';

/*
pages/index.js is associated with the / route
pages/posts/first-post.js is associated with the /posts/first-post route


 “Hey next, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”
            - in production mode runs at build time 
            - in development mode, runs on each request instead.
            - inside the function, you can fetch external data and send it as props to the page.*/
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>

      </section>
    </Layout>
  );
}