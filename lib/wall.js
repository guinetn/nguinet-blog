import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const wallDirectory = path.join(process.cwd(), 'wall');

function getMatter(folder) {
  const indexFile = path.join(folder, `index.md`);
  const fileContents = fs.readFileSync(indexFile, 'utf8');
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  return {
    head: matterResult.data,
    body:matterResult.content,
  }
}

function getRowData(folder) {
  const rowFolderContainer = path.join(wallDirectory, folder);
  const rowIntro = getMatter(rowFolderContainer);

  // Get Tiles Content
  let tilesFolders = fs.readdirSync( rowFolderContainer, {withFileTypes:true}).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name); 

  let tiles = [];
  tilesFolders.forEach(f => {
    const tileFolder = path.join(rowFolderContainer, f);
    const tile = getMatter(tileFolder);

    const slides = [];
    const slideFiles = fs.readdirSync(tileFolder).filter(x=>x.startsWith('slide'));
    slideFiles.forEach(s => {
      const slideFile = path.join(tileFolder, s);
      const slideContent = fs.readFileSync(slideFile, 'utf8');
      
      remark()
      .use(html, { sanitize: false })
      .process(slideContent).then( contentHtml=> {

        slides.push(  { 
          tile: s, 
          slidecontent:contentHtml.value
        });
      });
    });
  
    tile['slides'] = slides;  
    tiles.push(tile);
  });
  
  // Combine the data with the id and contentHtml
  return {
    folder,
    ...rowIntro,
    tiles:tiles,
  };
}

export function getRowsOfTiles(folder) {

  let folderContainer = path.join(wallDirectory, folder);
  const rowOfTiles = getMatter(folderContainer);

  let contentHtml = ""; 
  const processedContent =  remark()
  .use(html, { sanitize: false })
  .process(rowOfTiles.body).then( content => {
    contentHtml =  content;
  });

  // get data on folders inside
  let folders = fs.readdirSync( folderContainer, {withFileTypes:true}).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name); // [ '.net', 'dom', 'js', 'rust' ]
  
  let wallRows = [];
  folders.forEach(f => {
    let rowData = getRowData(`${folder}/${f}`);
    wallRows.push(rowData);
  });

  // Combine the data with the folder and contentHtml
  return {
    folder,
    head: rowOfTiles.head, // [rowtitle, rowsubtitle, image]
    body: contentHtml,
    wallRows
  };
  
}

export function getAllTilesIds() {
  let folders = fs.readdirSync(wallDirectory); // [ '.net', 'dom', 'js', 'rust' ]

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
  const tiles = [];
  
  folders.forEach(id=> {

    // Read tile content
    const fullPath = path.join(wallDirectory, id);
    const tile = getMatter(fullPath);
    remark()
    .use(html, { sanitize: false })
    .process(tile.body).then( contentHtml=> {
      tiles.push( {
        id,
        ...tile.head,
        content: contentHtml.value,
      });
    });
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