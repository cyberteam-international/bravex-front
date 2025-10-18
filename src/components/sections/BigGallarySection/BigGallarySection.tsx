'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import type { SectionProps } from '@/shared/types/common';
import { BASE_BACK_URL } from "@/services/api/requests";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import styles from './BigGallarySection.module.css';
import SliderButtons from '@/components/SliderButtons/SliderButtons';

const BigGallarySection =  ({ data }: SectionProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Slides data
  const slides = data.Gallary || []

  return (
    <div className="container-max">
      <div className={styles.showreelInner}>
        <div className={styles.showreelHead}>
          <h2 className={`${styles.showreelHeadHeader} ${data.lightVersion ? styles.lightVersion : ''} fade-in`}>{data.Title}</h2>
          {slides.length > 1 && (
            <SliderButtons
              onPrevClick={() => swiperRef.current?.slidePrev()}
              onNextClick={() => swiperRef.current?.slideNext()}
            />
          )}
        </div>

        <div className={`${styles.showreelSwiperWrapper} fade-in`}>
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
            {slides.map((slide: any) => (
              <SwiperSlide key={slide.id} className={styles.showreelSwiperSlide}>
                {(slide.Image?.url || slide.url) && (
                  <Image 
                    src={BASE_BACK_URL + (slide.Image?.url || slide.url)} 
                    alt={slide.name || slide.Title || ''} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BigGallarySection;