import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import { onBoardingSliderData } from "../Helpers/onBoardingSliderData";

function Slider() {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
   
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay
        pagination={{ clickable: true, type: "bullets" }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
       { onBoardingSliderData.map((item, index) => (
           <SwiperSlide key={index} >
           <div className="mb-10 flex flex-col  h-full items-center justify-center">
             <img src={item.img} alt={item.heading} className="" />
             <h2 className="font-bold text-2xl mt-14 mb-4 text-white">{item.heading}</h2>
             <p className="mb-36 text-center w-8/12 text-white font-semibold text-lg">{item.text_content}</p>
           </div>
         </SwiperSlide>
           ))}

{/* <SwiperSlide>Slider 1</SwiperSlide>
<SwiperSlide>Slider 2</SwiperSlide>
<SwiperSlide>Slider 3</SwiperSlide>
<SwiperSlide>Slider 4</SwiperSlide> */}
      </Swiper>
    // </div>
  );
}

export default Slider;
