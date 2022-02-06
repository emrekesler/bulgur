import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

function Slider() {
  return (
    <div className="rounded flex flex-col md:flex-row items-center text-center p-2 bg-blue-100">
      <button className="bg-blue-500 text-white items-center rounded text-tiny p-1 px-4 mr-3">Trending:</button>
      <div className="w-full">
        <Swiper
          spaceBetween={50}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>The most common business debate isnt as black and white as you might think</SwiperSlide>
          <SwiperSlide>How the 10 worst business fails of all time could have been prevented</SwiperSlide>
          <SwiperSlide>The most common business debate isnt as black and white as you might think</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
