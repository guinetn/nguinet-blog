import Layout from '../../components/global/layout/layout';
import { getAllProjectIds, getProjectData } from '../../lib/projects';
import Date from '../../components/date/date';
import Head from 'next/head';

// Dynamic routes: /projects/<id> 	id: name of the markdown file 
// 1. A React component to render this page
export default function Project({ projectData }) {
  return (
      <Layout>
       <Head>
          <title>{projectData.title}</title>
        </Head>
        <br />
        {projectData.id} 
        <br />
         <Date dateString={projectData.date} /> 
        <br />
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </Layout>
  );
}

// 2. getStaticPaths which returns an array of possible values for id
export async function getStaticProps({ params }) {
  // Return a list of possible value for id
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

// 3. getStaticProps which fetches necessary data for the project with id
export async function getStaticPaths() {
  // Fetch necessary data for the blog project using params.id
  //   In development (npm run dev or yarn dev): getStaticPaths runs on every request.
  //   In production: getStaticPaths runs at build time.
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false         // any paths not returned by getStaticPaths will result in a 404 page.
  };
}
