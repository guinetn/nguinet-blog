import React, { useEffect, useRef } from "react";
import * as style from './swipemodal.module.css'
import { Navigation, Pagination, Keyboard, Zoom, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const SwipeModal = ({ data, isOpened, onClose, children, } ) => {
 
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
        <h3>{data.title}</h3>
        <h3>{data.folder}</h3>

        <Swiper
          modules={[Keyboard, Navigation, Pagination, Scrollbar, Zoom]}
          spaceBetween={50}
          slidesPerView={3}
          zoom = {true}
          keyboard = {{ enabled: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
            {children}

            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>
            # Slide 1<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
              
              <span className="swiper-no-swiping">some text NOT SWIPABLE</span>

              <br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </div>
            </SwiperSlide>

        </Swiper>

      </div>
    </dialog>
  );
};

export default SwipeModal;
