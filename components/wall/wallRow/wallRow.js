import style from './wallrow.module.css';
// import utilStyles from '../../styles/utils.module.css';
// import DateMonthAgo from '../../components/date';
// import Keyword from '../../components/keyword/keyword';

export default function WallRow({folder, title, sidetitle, content, image }) { 

  function onWheel(event) {

      if (event.target==undefined)
        return;
      const closestContainer = event.target.closest("section");
      if (closestContainer==null || ! closestContainer.classList.contains(`${style.container}`)) {
        return;
      }

      let y = event.deltaY;
      const delta = Math.min(Math.abs(y), 150) * 1; // scrollWheel.factor
      const direction = -y/Math.abs(y);

      let x = 1.0*closestContainer.style.left.replace('px','') + delta*direction;
      x = Math.min(0,x);
      x = Math.max( -2*document.defaultView.window.visualViewport.width-15, x); //-15 to see the right border
      closestContainer.style.left = x + 'px';
    };

  return (
    <>
      <div className={style.main}>
        <div className={style.wallRows} onWheel={(e)=>onWheel(e)}>

          <section id='container1' className={style.container}>
	    	      
              <div className={`${style.item} ${style.intro}`}>
                <h1>{title}</h1> 
                <h2 className='sidetitle'>{sidetitle}</h2>
                {content}
              </div>

              <article id='article-01' className={`${style.item} ${style.back01} ${style.articleCell}`}>
                <div className={`${style.articleContent}`}>
                  <button className={`copyable ${style.buttonCopy}`} role="button">cursor: msgkkgso</button>
                  <button className={`copyable ${style.buttonCopy}`} role="button">cursor: msgkkqsfsq</button>
                  <p>cursor: pointer</p>
                  <button className={`copyable ${style.buttonCopy}`} role="button">cursor: msgkkqsfsq</button>
                </div>
                <h2>xxx</h2>
                <a href="images/fulls/01.jpg"></a>
            </article>

            <article id='article-02' className={`${style.item} ${style.back02} ${style.articleCell}`}>
                <h2>Ad Infinitum</h2>
                <a href="images/fulls/02.jpg"></a>
            </article>

            <article id='article-03' className={`${style.item} ${style.back03} ${style.articleCell}`}>
                <h2>Different.</h2>
                <a href="images/fulls/03.jpg"></a>
            </article>

            <article id='article-04' className={`${style.item} ${style.back01} ${style.articleCell}`}>
	          <h2>Elysium</h2>
	          <a href="images/fulls/04.jpg"></a>
	      </article>

	      <article id='article-05' className={`${style.item} ${style.back01} ${style.articleCell}`}>
	          <h2>Kingdom of the Wind</h2>
	          <a href="images/fulls/05.jpg"></a>
	      </article>

	      <article id='article-06' className={`${style.item} ${style.back01} ${style.articleCell}`}>
	          <h2>The Pursuit</h2>
	          <a href="images/fulls/06.jpg"></a>
	      </article>

	      <article id='article-07' className={`${style.item} ${style.back01} ${style.articleCell}`}>
	          <h2>Boundless</h2>
	          <a href="images/fulls/07.jpg"></a>
	      </article>

	      <article id='article-08' className={`${style.item} ${style.back01} ${style.articleCell}`}>
	          <h2>The Spectators</h2>
	          <a href="images/fulls/08.jpg"></a>
	      </article>
	      <article id='article-09' className={`${style.item} ${style.back01} ${style.articleCell}`}>
	          <h2>You really got me</h2>
	          <a href="images/fulls/01.jpg"></a>
	      </article>

	      <article id='article-10' className={`${style.item} ${style.back01} ${style.articleCell}`}>
	          <h2>1 Ad Infinitum </h2>
	          <a href="images/fulls/02.jpg"></a>
	      </article>

	      <article id='article-11' className={`${style.item} ${style.back01} ${style.articleCell}`}>
	          <h2>2 Different.</h2>
	          <a href="images/fulls/03.jpg"></a>
	      </article>

	      <article id='article-12' className={`${style.item} ${style.back01} ${style.articleCell}`}>
	          <h2>3 Elysium</h2>
	          <a href="images/fulls/04.jpg"></a>
	      </article>

	      <article id='article-13' className={`${style.item} ${style.back01} ${style.articleCell}`}>
	          <h2>4 Kingdom of the Wind</h2>
	          <a href="images/fulls/05.jpg"></a>
	      </article>

	      <article id='article-14' className={`${style.item} ${style.back01} ${style.articleCell}`}>
	          <h2>5 The Pursuit</h2>
	          <a href="images/fulls/06.jpg"></a>
	      </article>

          </section>
        </div>	
      </div>

    </>
  );
}


/*

wallData:
  id: "rust"
  title: "RUST LANG"
  subtitle: "RUST-1 ↓ ↓"
  image: "images/posts/solen-feyissa-tSfSZb-eocE-unsplash.jpg"
  contentHtml: "<p>A responsive portfolio site<br />\r\ntemplate by HTML5 UP</p>\n"

  wallRows: Array(2)
    0: {folder: 'rust/cargo', title: 'cargo', sidetitle: 'cargo-1', image: 'images/posts/alexander-ant-hheHwahRhA4-unsplash.jpg', content: '<p>A rust résumé site<br />\r\ntemplate by HTML5 UP</p>'}
    1: {folder: 'rust/rust', title: 'rust 2', sidetitle: 'rust ↓', image: 'images/posts/solen-feyissa-tSfSZb-eocE-unsplash.jpg', content: '<p>A rust portfolio site<br />\r\ntemplate by HTML5 UP</p>'}


*/