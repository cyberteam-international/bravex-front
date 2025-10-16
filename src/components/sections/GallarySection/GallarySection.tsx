'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import type { SectionProps, GalleryItem } from '@/shared/types/common';
import { BASE_BACK_URL } from "@/services/api/requests";
import WhiteArrowSVG from '@/assets/icons/white-arrow-svg.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import styles from './GallarySection.module.css';
import SliderButtons from '@/components/SliderButtons/SliderButtons';

const GallarySection = ({ data }: SectionProps) => {

  const swiperRef = useRef<SwiperType | null>(null);

  // Slides data
  const slides = data.GallaryItems || [];

  if (!slides.length) {
    return null;
  }

  return (
    <div className="container-max">
      <div className={styles.galleryInner}>
        <div className={styles.galleryHead}>
          <h2 className={`${styles.galleryHeadHeader} fade-in`}>{data.Title}</h2>
          {slides.length > 1 && (
            <SliderButtons
              onPrevClick={() => swiperRef.current?.slidePrev()}
              onNextClick={() => swiperRef.current?.slideNext()}
            />
          )}
        </div>

        <div className={`${styles.gallerySwiperWrapper} fade-in`}>
          <Swiper
            modules={[Navigation]}
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={20}
            speed={500}
            simulateTouch={true}
            allowTouchMove={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              }
            }}
            className={styles.gallerySwiper}
          >
            {slides.map((slide: GalleryItem, index: number) => (
              <SwiperSlide key={slide.id} className={styles.gallerySwiperSlide}>
                <div className={styles.slideImageContainer}>
                  <Image 
                    src={BASE_BACK_URL + slide.Image.url} 
                    alt={slide.name || slide.Title || 'Gallery image'} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.slideOverlay}>
                    <div className={styles.slideContent}>
                      <a href={slide.href || '#'} className={styles.slideButton}>
                        <div className={styles.slideButtonContent}>
                          <h3 className={styles.slideTitle}>{slide.Title}</h3>
                          <div className={styles.slideButtonAction}>
                            <span className={styles.slideButtonText}>
                              {slide.LinkText || 'Learn more'}
                            </span>
                            <Image
                              src={WhiteArrowSVG}
                              alt="#"
                              className={styles.slideButtonArrow}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default GallarySection;