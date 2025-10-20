'use client'
import React from 'react';
import Image from "next/image";
import styles from "./HeroSection.module.css";
import Button from "@/components/Button/Button";
import { BASE_BACK_URL } from "@/services/api/requests";
import type { SectionProps } from "@/shared/types/common";


const HeroSection = ({ data }: SectionProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  
  // Определяем мобильное устройство
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Получаем медиафайл
  let mediaUrl = '';
  let mediaType = '';
  
  if (data.Media) {
    mediaUrl = BASE_BACK_URL + data.Media.url;
    mediaType = data.Media.mime;
  }

  const isVideo = mediaType?.startsWith('video/');
  const isImage = mediaType?.startsWith('image/');

  React.useEffect(() => {
    if (isVideo && videoRef.current) {
      const video = videoRef.current;
      video.load();
      video.play().catch(() => {
        // Если autoplay заблокирован, видео запустится при первом взаимодействии
      });
    }
  }, [isVideo, mediaUrl]);
  
  return (
    <div className="container-mobile">
      <div className={`${styles["hero-inner"]} ${isMobile && isImage ? styles["hero-inner--mobile-image"] : ""}`}>
        <div className={`${styles["head-back-wrap"]} ${isMobile && isImage ? styles["head-back-wrap--mobile-image"] : ""}`}>
          {/* <video src="./assets/head-video.mp4" className="header-back" muted autoplay loop playsinline preload="auto"></video> */}
          {mediaUrl && (
            <>
              {isVideo ? (
                <video
                  ref={videoRef}
                  className={styles["hero-back"]}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src={mediaUrl} type={mediaType} />
                </video>
              ) : isImage ? (
                <>
                  {isMobile ? (
                    // На мобильных устройствах используем обычный img для работы с position: static
                    <img
                      className={`${styles["hero-back"]} ${styles["hero-back--mobile-image"]}`}
                      src={mediaUrl}
                      alt=""
                    />
                  ) : (
                    // На десктопе используем Next.js Image с layout="fill"
                    <Image
                      className={styles["hero-back"]}
                      src={mediaUrl}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  )}
                </>
              ) : null}
            </>
          )}
        </div>

        <div className={styles["hero__content"]}>
          <h1 className={styles["hero__head"]}>
            {data.Title}
          </h1>

          <div className={styles["hero__content-row"]}>
            {data.Button ? (
              <div className={styles["hero__buttons-block"]}>
                {Array.isArray(data.Button) ? (
                  data.Button.map((button, index) => (
                    <Button key={index} href={button.href} variant={button.Variant}>
                      {button.Text}
                    </Button>
                  ))
                ) : (
                  <Button href={data.Button.href} variant={data.Button.Variant}>
                    {data.Button.Text}
                  </Button>
                )}
              </div>
            ) : null}
            {data.Description ? (
              <p className={styles["hero__description"]}>
                {data.Description}
              </p>
            ) : null}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
