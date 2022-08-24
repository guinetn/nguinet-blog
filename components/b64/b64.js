import b64Encode, {dragOver, onImageDrop, b64Decode} from './b64_util.js'
import style from './b64.module.css';
export default function B64() {

  return (
    <>
      <section> 

        <div className="box3d">
          <h4>⭐ Base64</h4>
          <div className="flexcol swiper-no-swiping">
            <textarea rows="4" cols="96" id="b64PlainText" placeholder="Text to encode"></textarea>
            <div className='fleflexcenter'>
              <div>
                <button className='bt-toolbox' onClick={b64Encode}>Encode ↓</button>
                <button className='bt-toolbox' onClick={b64Decode}>Decode ↑</button>
              </div>
              <div className='flexleft'>
                <p className="halign">Drop an image here →<br/>Try this <img src='./images/waterdrop.jpg'/></p>
                <canvas id="dropableCanvas" className={style.b64Canvas} onDragOver={dragOver} onDrop={onImageDrop} 
                title="Drop image to convert to base64 here"></canvas>
              </div>
            </div>
            <textarea rows="15" cols="96" id="b64EncodedText" placeholder="Text to decode"></textarea>
          </div>
        </div>
          
      </section>
    </>
  );
}
