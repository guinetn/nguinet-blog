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

function getRowData(folder) {
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

export async function getRowsOfTiles(folder) {
  const fullPath = path.join(wallDirectory, `${folder}/index.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const processedContent = await remark()
  .use(html, { sanitize: false })
  .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // get data on folders inside
  let folderContainer = path.join(wallDirectory, folder);
  console.log("         folderContainer -----> " + folderContainer);
  let folders = fs.readdirSync( folderContainer, {withFileTypes:true}).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name); // [ '.net', 'dom', 'js', 'rust' ]
  console.log("         folders -----> " + folders);
  
  let wallRows = [];
  folders.forEach(f => {
    let rowData = getRowData(`${folder}/${f}`);
    wallRows.push(rowData);
  });
  console.log("wallRows: " + wallRows);
  // Combine the data with the folder and contentHtml
  return {
    folder,
    contentHtml,
    ...matterResult.data, // [rowtitle, rowsubtitle, image]
    wallRows
  };
}

export function getAllTilesIds() {
  let folders = fs.readdirSync(wallDirectory); // [ '.net', 'dom', 'js', 'rust' ]
  //console.log("?? in " + wallDirectory);
  //console.log("         -----> " + folders);

  return folders.map((f) => {
    return {
      params: {
        id: f,
      },
    };
  });
}


export function getTiles() {
  const folders = fs.readdirSync(wallDirectory);
  const tiles = folders.map((id) => {

    // Read tile content
    const fullPath = path.join(wallDirectory, id, 'index.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the tile metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      content: matterResult.content,
    };
  });

  // Sort posts by date
  return tiles.sort(({ id: a }, { id: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}