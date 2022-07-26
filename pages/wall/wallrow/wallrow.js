﻿import style from './wallrow.module.css';

export default function WallRow({folder, head, body, tiles }) { 

/*
    wallRows: Array(2)
    0:
      content: "<p>A rust résumé site<br />\r\ntemplate by HTML5 UP</p>"
      folder: "rust/cargo"
      image: "images/posts/bkgnd/alexander-ant-hheHwahRhA4-unsplash.jpg"
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
      // console.log("wheel:" + event.target);

      if (event.target==undefined) {
        return;
      }
      const closestContainer = event.target.closest("section");
      if (closestContainer==null || ! closestContainer.classList.contains(`${style.container}`)) {
        return;
      }

      let y = event.deltaY;
      const delta = Math.min(Math.abs(y), 150) * 1; // scrollWheel.factor
      const direction = -y/Math.abs(y);

      let x = 1.0*closestContainer.style.left.replace('px','') + delta*direction;
      x = Math.min(0,x);
      x = Math.max( -2*document.defaultView.window.visualViewport.width-15, x); //-15 to keep the right border visible
      closestContainer.style.left = x + 'px';
 };

  return (
    <>
      <div className={style.main}>
        <div className={style.wallRows} onWheel={(e)=>onWheel(e)}>

          <section id='container1' className={style.container}>
	    	      
            <div key={head?.title} className={`${style.item} ${style.intro}`}>
              <h1>{head?.title}</h1> 
              <h2 className='sidetitle'>{head?.sidetitle}</h2>
              <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>

            {tiles?.map(({ head, body, slides}, i) => (
              <article key={`tile-${i}`} className={`${style.item} ${style.back01} ${style.articleCell}`}>
                  <div className={`${style.articleContent}`}>
                    <div dangerouslySetInnerHTML={{ __html: body }}/>
                  </div>
                  <h2>{head?.title}</h2>
                  <a href="images/fulls/01.jpg"></a>
                 
                  <data key={`slide-${i}`} className={style.slides}>
                  {slides?.map((s,j)=> 
               
                    <div key={`sl-a${j}`}>
                      <div dangerouslySetInnerHTML={{ __html: s.slidecontent }} />
                      <div>slide-separator</div>
                    </div>
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

