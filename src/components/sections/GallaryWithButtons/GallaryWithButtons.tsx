"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { SectionProps, GalleryItem } from "@/shared/types/common";
import { BASE_BACK_URL } from "@/services/api/requests";
import Button from "@/components/Button/Button";
import SliderButtons from "@/components/SliderButtons/SliderButtons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from "./GallaryWithButtons.module.css";

const GallaryWithButtons = ({ data }: SectionProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Slides data
  const slides = data.GallaryItems || [];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 999);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!slides.length) {
    return null;
  }

  const renderSlide = (slide: GalleryItem) => (
    <div className={styles.showreelSwiperSlide}>
      {slide.Media?.url && (
        <Image
          src={BASE_BACK_URL + slide.Media.url}
          alt={slide.Title || slide.name || ""}
          fill
          sizes="(max-width: 800px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      )}
      <div className={styles.swiperSlideContent}>
        <div className={styles.swiperSlideTitle}>
          <span>{slide.Title || slide.name}</span>
        </div>
        {slide.Button && (
          <div className={styles.swiperSlideButtons}>
            {Array.isArray(slide.Button) ? (
              slide.Button.map((button, index) => (
                <Button key={index} href={button.href} variant={button.Variant}>
                  {button.Text}
                </Button>
              ))
            ) : (
              <Button href={slide.Button.href} variant={slide.Button.Variant}>
                {slide.Button.Text}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="container-max">
      <div className={styles.showreelInner}>
        <div className={styles.swiperContainer} id="showreel-slider">
          <div className={styles.showreelHead}>
            <h2 className={`fade-in ${styles.showreelHeadHeader}`}>
              {data.Title}
            </h2>

            <SliderButtons
              onPrevClick={() => swiperRef.current?.slidePrev()}
              onNextClick={() => swiperRef.current?.slideNext()}
              className={styles.showreelSliderButtons}
            />
          </div>

          <div className={`${styles.showreelSwiperWrapper} fade-in`}>
            {isMobile ? (
              <div className={styles.mobileGrid}>
                {slides.map((slide: GalleryItem) => (
                  <div key={slide.id}>{renderSlide(slide)}</div>
                ))}
              </div>
            ) : (
              <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                direction="horizontal"
                centeredSlides={true}
                initialSlide={1}
                slidesPerView={3}
                spaceBetween={14}
                speed={500}
                simulateTouch={true}
                allowTouchMove={true}
                breakpoints={{
                  999: {
                    slidesPerView: 2,
                    spaceBetween: 14,
                    centeredSlides: true,
                  },
                  1400: {
                    slidesPerView: 3,
                    spaceBetween: 23,
                    centeredSlides: true,
                  },
                }}
                className={styles.showreelSwiper}
              >
                {slides.map((slide: GalleryItem) => (
                  <SwiperSlide
                    key={slide.id}
                    className={styles.showreelSwiperSlide}
                  >
                    {slide.Media?.url && (
                      <Image
                        src={BASE_BACK_URL + slide.Media.url}
                        alt={slide.Title || slide.name || ""}
                        fill
                        sizes="(max-width: 800px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                    <div className={styles.swiperSlideContent}>
                      <div className={styles.swiperSlideTitle}>
                        <span>{slide.Title || slide.name}</span>
                      </div>
                      {slide.Button && (
                        <div className={styles.swiperSlideButtons}>
                          {Array.isArray(slide.Button) ? (
                            slide.Button.map((button, index) => (
                              <Button
                                key={index}
                                href={button.href}
                                variant={button.Variant}
                              >
                                {button.Text}
                              </Button>
                            ))
                          ) : (
                            <Button
                              href={slide.Button.href}
                              variant={slide.Button.Variant}
                            >
                              {slide.Button.Text}
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallaryWithButtons;
