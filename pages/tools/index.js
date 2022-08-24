import Layout from '../../components/global/layout/layout';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import Timestamp from '../../components/timestamp/timestamp';
import Regex from '../../components/regex/regex';
import B64 from '../../components/b64/b64';

import utilStyles from '../../styles/utils.module.css';
import Links_Tile from '../../components/links_tile/links_tile';

export default function Tools() {

  const toolbox_online_tools = [
    "ONLINE TOOLS",
    "https://docs.w3cub.com",
    "https://vclock.com(countdown, alarms)",
    "https://asciiflow.com",
    "https://app.diagrams.net(draw.io)",
    "https://app.code2flow.com(code flow)",
    "https://pastebin.com",
    "https://cloud.mongodb.com",
    "https://dashboard.fauna.com(fauna DB)",
    "https://playground.platform.uno/"
  ];

  return (
    <Layout>
     
     <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

      <h2 className={`${utilStyles.headingLg} colorGold`}>Toolbox</h2>

      <Swiper
        spaceBetween={0}
        speed={600}
        noSwiping={true}
        pagination={{
          clickable: true,
          type: "progressbar",
        }}
        keyboard={{
          enabled: true,
        }}
        grabCursor={true}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper">
          
        <SwiperSlide>
          <Links_Tile links={toolbox_online_tools}/>
        </SwiperSlide>

        <SwiperSlide>
          <Timestamp/>
        </SwiperSlide>

        <SwiperSlide>
          <B64/>
        </SwiperSlide>

        <SwiperSlide>
          <Regex/>
        </SwiperSlide>
    
      </Swiper>
      </section>
    </Layout>
  );
}