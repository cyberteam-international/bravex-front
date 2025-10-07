'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import styles from './ShowreelSection.module.css';
import SliderButtons from '@/components/SliderButtons/SliderButtons';

// Import images
import slider1 from '@/assets/slider1.webp';
import slider2 from '@/assets/slider2.webp';
import slider3 from '@/assets/slider3.webp';

const ShowreelSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Slides data
  const slides = [
    {
      id: 1,
      src: slider1,
      alt: "Showreel slide 1"
    },
    {
      id: 2,
      src: slider2,
      alt: "Showreel slide 2"
    },
    {
      id: 3,
      src: slider3,
      alt: "Showreel slide 3"
    }
  ];

  return (
    <div className="container-max">
      <div className={styles.showreelInner}>
        <div className={styles.showreelHead}>
          <h2 className={styles.showreelHeadHeader}>SHOWREEL</h2>
          
          <SliderButtons
            onPrevClick={() => swiperRef.current?.slidePrev()}
            onNextClick={() => swiperRef.current?.slideNext()}
          />
        </div>

        <div className={styles.showreelSwiperWrapper}>
          <Swiper
            modules={[Navigation]}
            direction="horizontal"
            centeredSlides={true}
            initialSlide={1}
            slidesPerView={1.2}
            spaceBetween={6}
            speed={500}
            simulateTouch={true}
            allowTouchMove={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              1000: {
                slidesPerView: 1.7,
                spaceBetween: 14
              }
            }}
            className={styles.showreelSwiper}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className={styles.showreelSwiperSlide}>
                <Image 
                  src={slide.src} 
                  alt={slide.alt} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ShowreelSection;