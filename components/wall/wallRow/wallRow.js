import style from './wallrow.module.css';
// import utilStyles from '../../styles/utils.module.css';
// import DateMonthAgo from '../../components/date';
// import Keyword from '../../components/keyword/keyword';
import { SwiperSlide } from 'swiper/react';

export default function WallRow({folder, title, sidetitle, content, image, tiles }) { 

/*
    wallRows: Array(2)
    0:
      content: "<p>A rust résumé site<br />\r\ntemplate by HTML5 UP</p>"
      folder: "rust/cargo"
      image: "images/posts/alexander-ant-hheHwahRhA4-unsplash.jpg"
      sidetitle: "cargo-1 ↓"
      tiles: Array(4)
        0:
          content: "\r\n<button class=\"copyable button-30\" role=\"button\">cursor: msgkkgso</button>\r\n<button class=\"copyable button-30\" role=\"button\">cursor: msgkkqsfsq</button>\r\n<p>cursor: pointer</p>\r\n<button class=\"copyable button-30\" role=\"button\">cursor: msgkkqsfsq</button>\r\n"
          image: "images/posts/greg-rakozy-0LU4vO5iFpM-unsplash.jpg"
          title: "Linq"
          slides: (4) [{…}, {…}, {…}, {…}]
            0:
              tile: "slide01.md"
              slidecontent: "# C# types\r\n\r\n## REFERENCES\r\n\r\n <h2>Ad Infinitum</h2>\r\n                <a href=\"images/fulls/02.jpg\"></a>\r\n\r\n## VALUES\r\n\r\nfezgzr\r\ng\r\ndf\r\ng\r\ndfg\r\ndf"
            1: ...
    1: ...
*/

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
	    	      
            <div key={title} className={`${style.item} ${style.intro}`}>
              <h1>{title}</h1> 
              <h2 className='sidetitle'>{sidetitle}</h2>
              {content}
            </div>

            {tiles.map(({ title, content, image, slides}, i) => (
              <article key={`tile-${i}`} className={`${style.item} ${style.back01} ${style.articleCell}`}>
                  <div className={`${style.articleContent}`}>
                    {content.substring(0,10)}
                  </div>
                  <h2>{title}</h2>
                  <a href="images/fulls/01.jpg"></a>
                 
                  <data key={`slide-${i}`} className={style.slides}>
                  {slides.map((s,j)=> 
                      <SwiperSlide key={`SwipeSlide-${j}`}>
                        {s.slidecontent}
                      </SwiperSlide>
                  )}
                  </data>

              </article>
            ))}
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