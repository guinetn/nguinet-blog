import style from './postitem.module.css';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';
import DateIso from '../../components/date';
import Keyword from '../../components/keyword/keyword';

export default function Postitem({ id, title, abstract, keywords, image, date }) {

  return (
    <>
    <Link href={`/posts/${id}`}>
     <div className={`${style.postItem} ${style.linkhand}`} data-filter-id={id}
          style={{backgroundImage: `url(${image})`}}>
          
          <a className={`glink ${style.posttitle}`}>
            <h3 >{title}</h3>
          </a>

        <Keyword keywords={keywords}/>
        
        <small className={`${style.postdate} ${utilStyles.lightText}`}>
        🕑 <DateIso dateString={date} />
        </small>
      </div>
      </Link>
    </>
  );
}

/*

title: 'Two Forms of Pre-rendering'
abstract: 'Two Forms of Pre-rendering lorem gpsdkgp^k ^skpg ksdgk sdkg sdjgj sdmjgdslj gsdmjgmsdgj smdg'
date: '2020-01-01'
keywords: 'react, js, devops'
image: 

*/