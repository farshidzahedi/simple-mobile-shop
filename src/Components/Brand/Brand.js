import React, { useContext } from "react";
import { ContextData } from "../ContextData/ContextData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation } from "swiper";
import { BsArrowDownLeftSquare } from "react-icons/bs";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Brand() {
  const contextData = useContext(ContextData);
  return (
    <div>
      <div className="mr-5 flex gap-4 items-center text-blue-500 mb-5 mt-10 font-normal">
        <BsArrowDownLeftSquare />
        <h1>برند ها</h1>
      </div>

      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper  bg-white rounded-md border mb-10 flex md:flex "
      >
        <div>
          {contextData.brands.map((brand) => (
            <SwiperSlide className="flex items-center p-5">
                <img src={brand.img} alt="" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Brand;
