import Link from 'next/link';
import style from './walltile.module.css';

export default function WallTile({id, tiletitle, tilesubtitle, content, image }) { 
  return (
    <>
      <Link href={`/wall/${id}`}>
        <div className={`${style.tile} ${style.linkhand}`} data-filter-id={id} 
             style={{backgroundImage: `url(${image})`}} >
         
          <a className={`glink ${style.walltitle}`}>
            <h3 >{tiletitle}</h3>
            <h3 >{tilesubtitle}</h3>
            <h3 >{content}</h3>
          </a>
        </div>
      </Link>
    </>
  );
}

/*

folder
title: 'Two Forms of Pre-rendering'
image: 

*/