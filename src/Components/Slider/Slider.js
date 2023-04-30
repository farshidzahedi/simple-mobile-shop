import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { ContextData } from "../ContextData/ContextData";

//import context

export default function App() {
  const contextData = useContext(ContextData)
  return (
    <div className="mt-1">
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {contextData.sliders.map((slide) => {
          return (
            <SwiperSlide>
              <img src={slide.img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
