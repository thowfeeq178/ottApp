import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

const Carousel = ({ items }) => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerView={2.01}
        keyboard={true}
        grabCursor={true}
        lazyPreloadPrevNext={2}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, Keyboard, Mousewheel]}
        className="mySwiper"
        onClick={(ev) => {
          console.log("ev? onclick ", ev.realIndex);
          console.log(items.playlist[ev.realIndex]);
        }}
        // onSlideChange={(swiperCore) => {
        //   const { activeIndex, snapIndex, previousIndex, realIndex } =
        //     swiperCore;
        //   console.log({ activeIndex, snapIndex, previousIndex, realIndex });
        // }}
      >
        {items.playlist.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link
                to={"/details/" + item.mediaid}
                state={{ data: item }}
                id="styledLink"
              >
                <div className="carouselItem">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="carouselImage"
                  />
                  <div className="title">{item?.title}</div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default Carousel;
