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

const wallDirectory = path.join(process.cwd(), 'wall');


function getFolderData(folder) {
  const fullPath = path.join(wallDirectory, folder, `index.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id and contentHtml
  return {
    folder,
    ...matterResult.data,
    content:matterResult.content
  };
}


export async function getWallData(id) {
  const fullPath = path.join(wallDirectory, `${id}/index.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const processedContent = await remark()
  .use(html, { sanitize: false })
  .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // get data on folders inside
  let folderContainer = path.join(wallDirectory, id);
  console.log("         folderContainer -----> " + folderContainer);
  let folders = fs.readdirSync( folderContainer, {withFileTypes:true}).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name); // [ '.net', 'dom', 'js', 'rust' ]
  console.log("         folders -----> " + folders);
  let wallRows = [];
  folders.forEach(f => {
    let data = getFolderData(`${id}/${f}`);
    wallRows.push(data);
  });
  console.log("wallRows: " + wallRows);
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
    wallRows
  };
}


export function getAllWallIds() {
  console.log("?? in " + wallDirectory);
  let folders = fs.readdirSync(wallDirectory); // [ '.net', 'dom', 'js', 'rust' ]
  console.log("         -----> " + folders);

  return folders.map((f) => {
    return {
      params: {
        id: f,
      },
    };
  });
}


export function getSortedWalls() {
  const folders = fs.readdirSync(wallDirectory);
  const walls = folders.map((folder) => {

    // Read markdown file as string
    const fullPath = path.join(wallDirectory, folder, 'index.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      folder,
      ...matterResult.data,
      content: matterResult.content,
    };
  });

  // Sort posts by date
  return walls.sort(({ folder: a }, { folder: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}