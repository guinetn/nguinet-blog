import Layout from '../../components/global/layout/layout';
import { getAllCourseIds, getCourseData } from '../../lib/courses';
import Date from '../../components/date/date';
import Head from 'next/head';

// Dynamic routes: /courses/<id> 	id: name of the markdown file 
// 1. A React component to render this page
export default function Course({ courseData }) {
  return (
      <Layout>
       <Head>
          <title>{courseData.title}</title>
        </Head>
        <br />
        {courseData.id} 
        <br />
         <Date dateString={courseData.date} /> 
        <br />
        <div dangerouslySetInnerHTML={{ __html: courseData.contentHtml }} />
      </Layout>
  );
}

// 2. getStaticPaths which returns an array of possible values for id
export async function getStaticProps({ params }) {
  // Return a list of possible value for id
  const courseData = await getCourseData(params.id);
  return {
    props: {
      courseData,
    },
  };
}

// 3. getStaticProps which fetches necessary data for the course with id
export async function getStaticPaths() {
  // Fetch necessary data for the blog course using params.id
  //   In development (npm run dev or yarn dev): getStaticPaths runs on every request.
  //   In production: getStaticPaths runs at build time.
  const paths = getAllCourseIds();
  return {
    paths,
    fallback: false         // any paths not returned by getStaticPaths will result in a 404 page.
  };
}
