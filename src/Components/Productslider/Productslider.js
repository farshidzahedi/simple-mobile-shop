import React, { useContext, useState } from "react";
import Product from "./../Product/Product";
import { ContextData } from "../ContextData/ContextData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation } from "swiper";
import { BsArrowDownLeftSquare } from "react-icons/bs";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Productslider() {
  const contextData = useContext(ContextData);
  return (
    <div>
      <div className="mr-5 flex gap-4 items-center text-blue-500 mb-5 mt-10 font-normal">
        <BsArrowDownLeftSquare />
        <h1> محصولات پرتخفیف</h1>
      </div>

      <Swiper 
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper  bg-white h-[330px] rounded-md border mb-10">
        <div>
          
          {contextData.allProducts.map((product) => (
            <SwiperSlide>
              <div className="w-full p-5 hover:shadow-lg h-full ">
                <img src={product.thumbnails}/>
                <h2 className="text-sm text-gray-500 my-2 box-content hover:text-blue-600 custom-css">
                  {product.title}
                </h2>
                <samp className="w-auto bg-blue-100 py-1 px-3 text-blue-500 text-xs rounded-lg">
                  {product.discount}
                </samp>
                <div className="price flex justify-between justify-center items-center">
                  <span className="text-red-400 text-sm line-through">
                    {product.oldPrice}
                  </span>
                  <span className="text-blue-600 text-2xl">
                    {product.price}
                    <span className="text-gray-400 mr-1 text-[10px]">تومان</span>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
export default Productslider;
