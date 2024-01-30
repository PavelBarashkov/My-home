import classes from "./catalog.module.css";
import { Section } from "../Section/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-creative";
import { data } from "./data";


export const Catalog = () => {

  return (
    <Section title="Каталог" isContainer={false} idName="Catalog">
      <Swiper
        wrapperClass={classes.wrapper}
        modules={[EffectCreative, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1.5}
        parallax={true}
        breakpoints={{
          320: { speed: 900, slidesPerView: 1.2, creativeEffect: {next: {translate: ["90%", 0, 0]}, prev : {translate: ["-90%", 0, 0]}}},
          600: { speed: 1400 },
        }}
        keyboard={{ enabled: true }}
        centeredSlides={true}
        loop={true}
        slideToClickedSlide={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={
          {
            nextEl: classes.next
          }
        }
        effect="creative"
        creativeEffect={{
          limitProgress: 2,
          prev: {
            opacity: 0.4,
            scale: 0.85,
            translate: ["-90%", 0, 0],
          },
          next: {
            opacity: 0.4,
            scale: 0.85,
            translate: ["90%", 0, 0],
          },
        }}
      >
        {data.map((item: any) => (
          <SwiperSlide className={classes.SwiperSlide}>
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
