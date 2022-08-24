import Layout from '../../components/global/layout/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedProjectsData } from '../../lib/projects';  // use FRONT MATTER lib to extract project header
import Link from 'next/link';
import Date from '../../components/date/date';

/*
pages/index.js is associated with the / route
pages/projects/first-project.js is associated with the /projects/first-project route

 “Hey next, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”
            - in production mode runs at build time 
            - in development mode, runs on each request instead.
            - inside the function, you can fetch external data and send it as props to the page.*/
export async function getStaticProps() {
  const allProjectssData = getSortedProjectsData();
  return {
    props: {
      allProjectssData,
    },
  };
}

export default function Home({ allProjectssData }) {
  return (
    <Layout>
     
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>PROJECTS</h2>
        
        🚧 IN PROGRESS... 

        {/* <ul className={utilStyles.list}>
          {allProjectssData.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul> */}

      </section>
    </Layout>
  );
}