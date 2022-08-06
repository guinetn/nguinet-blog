import style from './wallitem.module.css';
import Link from 'next/link';
// import utilStyles from '../../styles/utils.module.css';
// import DateMonthAgo from '../../components/date';
// import Keyword from '../../components/keyword/keyword';

export default function Wallitem({folder, title, subtitle, content, image }) { //{ id, folder, abstract, keywords, image, date }) {

  return (
    <>
      <Link href={`/wall/${folder}`}>
        <div className={`${style.wallItem} ${style.linkhand}`} data-filter-id={folder} 
             style={{backgroundImage: `url(${image})`}} >
         
          <a className={`glink ${style.walltitle}`}>
            <h3 >{title}</h3>
            <h3 >{subtitle}</h3>
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