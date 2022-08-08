import React, { useEffect, useRef } from "react";
import * as style from './swipemodal.module.css'
import { Navigation, Pagination, Keyboard, Zoom, Scrollbar } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const SwipeModal = ({ data, isOpened, onClose } ) => {
 
  const ref = useRef(null);
  
  console.log("data swipper");
  console.dir(data);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpened]);

  const preventAutoClose = (e) => e.stopPropagation();

  return (
    <dialog className={style.dialog} ref={ref} onCancel={onClose} onClick={onClose}>
     
      <div onClick={preventAutoClose}>
        <h3>{data.title}</h3>

        <Swiper
          modules={[Keyboard, Navigation, Pagination, Scrollbar, Zoom]}
          spaceBetween={50}
          slidesPerView={3}
          zoom = {true}
          keyboard = {{ enabled: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
            {data.slides}
        </Swiper>

      </div>
    </dialog>
  );
};

export default SwipeModal;
