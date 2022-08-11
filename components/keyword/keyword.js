import style from './keyword.module.css'

export default function Keywords({ keywords }) {
  return (
    <div className={style.keywordsContainer}>
    { keywords.split(',').map( k=> 
        <small key={k} className={style.keyword}> {k.trim().toLowerCase()} </small>
      )
    }
    </div>);
}
