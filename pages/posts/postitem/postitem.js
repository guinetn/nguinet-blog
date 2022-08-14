import style from './postitem.module.css';
import Link from 'next/link';
import utilStyles from '../../../styles/utils.module.css';
import DateMonthAgo from '../../../components/date/date';
import Keyword from '../../../components/keyword/keyword';

export default function Postitem({ id, title, abstract, keywords, image, date }) {
  
  return (
    <>
    <Link href={`/posts/${id}`}>
     <div className={`${style.postItem} ${style.linkhand}`} data-filter-id={id}
          style={{backgroundImage: `url(${image})`}}>
          
          <a className={`glink ${style.posttitle}`}>
            <h3 >{title}</h3>
            <div className={style.abstract}>{abstract.substring(0,60)}…</div>
          </a>


        <Keyword keywords={keywords}/>

        <small className={`${style.postdate} ${utilStyles.lightText}`}>
        🕑 <DateMonthAgo dateString={date} />
        </small>
      </div>
      </Link>
    </>
  );
}
