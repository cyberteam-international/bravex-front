'use client'
import React from "react";
import Image from "next/image";
import styles from "./CallToActionV2.module.css";
import Button from "@/components/Button/Button";
import type { SectionProps } from '@/shared/types/common';
import { BASE_BACK_URL } from "@/services/api/requests";
import Logo from '@/assets/icons/logo.svg';


const CallToActionV2 = ({ data }: SectionProps) => {
  const technoBlocks = data.CallToActionItems || []
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Принудительно загружаем и запускаем видео
      video.load();
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Если autoplay заблокирован, пробуем еще раз после небольшой задержки
          setTimeout(() => {
            video.play().catch(() => {
              console.log('Video autoplay blocked');
            });
          }, 100);
        });
      }
    }
  }, [data.Video?.url, data.MobileVideo?.url]);

  return (
    <div className="container-max">
      <div className={styles["techno-inner"]}>
        <div className={`${styles["techno__video-block"]} fade-in`}>
          <video
            ref={videoRef}
            className={styles["techno__video-back"]}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            key={`${data.Video?.url}-${data.MobileVideo?.url}`}
          >
            {/* pc */}
            <source
              src={BASE_BACK_URL + data.Video?.url}
              type="video/mp4"
              media="(min-width: 1000px)"
            />
            {/* mobile */}
            <source
              src={BASE_BACK_URL + data.MobileVideo?.url}
              type="video/mp4"
              media="(max-width: 999px)"
            />
          </video>
        </div>

        <div className={styles["techno__content-block"]}>
          <div className={`${styles["techno__content-row"]} fade-in`}>
            <p className={styles["techno__content-head"]}>
              {data.TopLeftText}
            </p>
            <Image 
              src={Logo}
              alt="" 
              width={92}
              height={40}
            />
          </div>



          <div className={styles["techno__content-row"]}>
            <div className={styles["techno__bloks-wrap"]}>
                <h2 
                  className={`${styles["techno__content-header"]} fade-in`}
                  style={{
                    ...(data.UnicFontSizeForTitle && {
                      ['--unic-desktop-font-size' as any]: data.UnicFontSizeForTitle
                    }),
                    ...(data.UnicFontSizeForTitileMobile && {
                      ['--unic-mobile-font-size' as any]: data.UnicFontSizeForTitileMobile
                    })
                  }}
                  dangerouslySetInnerHTML={{ __html: data.Title || '' }}
                />
                <div className={`${styles["techno__content-column"]} fade-in`}>
                    <Image 
                        src={Logo}
                        alt="" 
                        width={92}
                        height={40}
                    />
                    <div className={styles["techno-line"]}></div>
                    <p className={`${styles["techno__content-text"]} fade-in`}>
                        {data.Description}
                    </p>
                </div>
            </div>
        </div>


          

          

          <div className={styles["techno__content-row"]}>
            <div className={styles["techno__bloks-wrap"]}>
                {data.Button ? (  
                        <Button 
                        variant={Array.isArray(data.Button) ? data.Button[0].Variant : data.Button.Variant} 
                        href={Array.isArray(data.Button) ? data.Button[0].href : data.Button.href} 
                        className="fade-in"
                        >
                        {Array.isArray(data.Button) ? data.Button[0].Text : data.Button.Text}
                        </Button>
                    ) : null}

                <div className={styles["techno__bloks-wrap--blocks"]}>
                    
                    {technoBlocks.map((block, index) => (
                        block.href ? (
                        <a key={index} href={block.href} className={`${styles["techno__block"]} fade-in`}>
                            <p className={styles["techno__block-text"]}>
                            {block.Title}
                            </p>
                        </a>
                        ) : (
                        <div key={index} className={`${styles["techno__block"]} fade-in`}>
                            <p className={styles["techno__block-text"]}>
                            {block.Title}
                            </p>
                        </div>
                        )
                    ))}
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionV2;