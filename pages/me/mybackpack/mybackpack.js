import React, { useRef, useState } from "react";
import style from './mybackpack.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Parallax } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MyBackPack() {

    return (
      <section className='margintop35'> 

        <div className={`flexleft ${style.circle256}`}>
          <h2 className='marginleft1em'>🛠️ My Backpack</h2>
        </div>

        <p>This is the list of technologies I’ve been working with. I'm also a constant learner, open to learn more libraries, languages, etc!</p>

        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>

        <Swiper
        spaceBetween={0}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
          type: "progressbar",
        }}
        keyboard={{
          enabled: true,
        }}
        grabCursor={true}
        navigation={true}
        modules={[Keyboard, Parallax, Pagination, Navigation]}
        className="mySwiper">
          
        <SwiperSlide>
          <div className={style.slideContainer}>
           <div className='colorGold bolder' data-swiper-parallax="-300">
            DotNet Core
          </div>
          <div className='colorGrey italic' data-swiper-parallax="-200">
            C#, Winforms, WPF, MAUI, Asp.Net Core
          </div>
          <div className={style.text} data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>  
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.slideContainer}>
           <div className='colorGold bolder' data-swiper-parallax="-300">
            Javascript, React, Vue, NextJS, RxJS
          </div>
          <div className='colorGrey italic' data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className={style.text} data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>  
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.slideContainer}>
           <div className='colorGold bolder' data-swiper-parallax="-300">
            C, C++, Python, 
          </div>
          <div className='colorGrey italic' data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className={style.text} data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>  
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.slideContainer}>
           <div className='colorGold bolder' data-swiper-parallax="-300">
            IA: TensorFlow, Keras, R
          </div>
          <div className='colorGrey italic' data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className={style.text} data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>  
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.slideContainer}>
           <div className='colorGold bolder' data-swiper-parallax="-300">
            DataViz
          </div>
          <div className='colorGrey italic' data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className={style.text} data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>  
          </div>
        </SwiperSlide>

  
        </Swiper>

      </section>
    )
}