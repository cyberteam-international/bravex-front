'use client'
import React from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.css';
import Logo from '@/assets/icons/logo.svg';
import Button from "@/components/Button/Button";
import type { SectionProps } from '@/shared/types/common';
import { BASE_BACK_URL } from '@/services/api/requests';

const AboutSection = ({ data }: SectionProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const isLightVersion = data.lightVersion || false;
  
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
  }, [isVideo]);
  
  return (
    <div className="container-max">
      <div className={`${styles.aboutInner} ${isLightVersion ? styles.light : ''}`}>
        <div className={styles.aboutImageWrap}>
          <Image
            className={`${styles.aboutImageLogo} fade-in`}
            src={Logo}
            alt=""
            width={158}
            height={158}
          />
          
          {mediaUrl && (
            <>
              {isVideo ? (
                <video
                  ref={videoRef}
                  className={styles.aboutVideo}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src={mediaUrl} type={mediaType} />
                </video>
              ) : isImage ? (
                <Image
                  className={styles.aboutImageItem}
                  src={mediaUrl}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              ) : null}
            </>
          )}
        </div>

        <div className={styles.aboutContent}>
          <h2 
            className={`${styles.aboutContentHeader} ${isLightVersion ? styles.light : ''} fade-in`} 
            dangerouslySetInnerHTML={{ __html: data.Title || '' }}
          />
          <p 
            className={`${styles.aboutContentText} ${isLightVersion ? styles.light : ''} fade-in`}
            dangerouslySetInnerHTML={{ __html: data.Description || '' }}
          />

          {data.Button ? (
            (() => {
              const button = Array.isArray(data.Button) ? data.Button[0] : data.Button;
              return (
                <Button href={button.href} variant={button.Variant}>
                  {button.Text}
                </Button>
              );
            })()
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;