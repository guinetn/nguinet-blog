import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

/* fs is a library exclusive to Node, so you can't use it directly in the browser. 
But if you import it at the top of the file and use it in a function that only runs in the server, 
then Next will remove this import from the client bundle
https://github.com/vercel/next.js/discussions/12124
*/

const coursesDirectory = path.join(process.cwd(), 'courses');

export async function getCourseData(id) {
  const fullPath = path.join(coursesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the course metadata section
  const matterResult = matter(fileContents);

   // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}


/*
Fetch Course data from 
- External API
- Query Database

export async function getAllCourseIds() {
  // Instead of the file system,
  // fetch course data from an external API endpoint
  const res = await fetch('..');
  const courses = await res.json();
  return courses.map((course) => {
    return {
      params: {
        id: course.id,
      },
    };
  });
}*/

export function getAllCourseIds() {
  const fileNames = fs.readdirSync(coursesDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

/*
Fetch from api, file system or db
This is possible because getStaticProps only runs on the server-side. It will never run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers.
Because it’s meant to be run at build time, you won’t be able to use data that’s only available during request time, such as query parameters or HTTP headers
*/

// Fetches data from the file system (at build time)

export function getSortedCoursesData() {
  // Get file names under /courses
  const fileNames = fs.readdirSync(coursesDirectory);
  const allcoursesData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(coursesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the course metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort courses by date
  return allcoursesData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}



// fetch the data from other sources, like an external API endpoint, and it’ll work just fine:
/* export async function getSortedcoursesData() {
  // Instead of the file system,
  // fetch course data from an external API endpoint
  const res = await fetch('..');
  return res.json();
}
*/

// fetch he data from db
/*
import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedcoursesData() {
  // Instead of the file system,
  // fetch course data from a database
  return databaseClient.query('SELECT courses...')
}
*/