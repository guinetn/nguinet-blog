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

const projectsDirectory = path.join(process.cwd(), 'projects');



export async function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the project metadata section
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
Fetch Project data from 
- External API
- Query Database

export async function getAllProjectIds() {
  // Instead of the file system,
  // fetch project data from an external API endpoint
  const res = await fetch('..');
  const projects = await res.json();
  return projects.map((project) => {
    return {
      params: {
        id: project.id,
      },
    };
  });
}*/

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory);

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

export function getSortedProjectsData() {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort projects by date
  return allProjectsData.sort(({ date: a }, { date: b }) => {
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
/* export async function getSortedProjectsData() {
  // Instead of the file system,
  // fetch project data from an external API endpoint
  const res = await fetch('..');
  return res.json();
}
*/

// fetch he data from db
/*
import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedProjectsData() {
  // Instead of the file system,
  // fetch project data from a database
  return databaseClient.query('SELECT projects...')
}
*/