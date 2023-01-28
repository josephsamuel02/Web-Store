import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-flip";

import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const SwiperComp = () => {
  const photos = [
    "https://res.cloudinary.com/promotion-army/image/upload/v1667245895/no%20bg%20photo%20assets/pexels-andrea-piacquadio-3799837-removebg-preview_wejlwk.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1654795641/AllTech/maxim-hopman-Hin-rzhOdWs-unsplash_hwnl9l.jpg",
    "https://res.cloudinary.com/promotion-army/image/upload/v1654795650/AllTech/pexels-sound-on-3394650_kxyg6e.jpg",
  ];

  return (
    <div className="w-full mx-0 h-auto  bg-white items-center z-0">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        speed={800}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        effect={"flip"}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className=" mx-0  p-0 items-center"
      >
        {photos.map((img, i) => (
          <SwiperSlide key={i} className=" m-auto w-full h-80  ">
            <img src={img} alt="" className=" mx-auto w-auto h-full object-cover " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComp;
