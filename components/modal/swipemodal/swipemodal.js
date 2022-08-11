import React, { useEffect, useRef } from "react";
import * as style from './swipemodal.module.css'
import { Navigation, Pagination, Keyboard, Zoom, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const SwipeModal = ({ slides, isOpened, onClose } ) => {

  const ref = useRef(null);
  
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
        <h3>{slides.title}</h3>

        <Swiper 
          spaceBetween={50}
          slidesPerView={3}
          zoom = {true}
          keyboard = {{ enabled: true }}
          modules={[Keyboard, Navigation, Pagination, Scrollbar, Zoom]}>
            {Object.values(slides.slides).map((slideContent, index) => (
              <SwiperSlide key={slideContent}>
                <div dangerouslySetInnerHTML={{ __html: slideContent }} />
              </SwiperSlide>
            ))}
        </Swiper>

      </div>
    </dialog>
  );
};

export default SwipeModal;
