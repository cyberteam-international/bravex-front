'use client'
import React from 'react';
import type { SectionProps } from '@/shared/types/common';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import styles from './VideoSection.module.css';
import { BASE_BACK_URL } from "@/services/api/requests";

// Import logo
import LogoSVG from '@/assets/icons/logo.svg';

const VideoSection = ({ data }: SectionProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Определяем тип медиа
  let mediaType = '';
  if (data.Media) {
    mediaType = data.Media.mime || '';
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
      <div className={`${styles.machineInner} ${data.lightVersion ? styles['machineInner--light'] : ''}`}>
        <div className={`${styles.machineVideoBlock} fade-in`}>
          {/* Если это видео */}
          {isVideo && data.Media && (
            <video
              ref={videoRef}
              className={styles.machineVideoBack}
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            >
              <source
                src={BASE_BACK_URL + data.Media.url}
                type="video/mp4"
              />
            </video>
          )}

          {/* Если это изображение */}
          {isImage && data.Media && (
            <Image
              src={BASE_BACK_URL + data.Media.url}
              alt={data.Title || "Media content"}
              fill
              className={styles.machineVideoBack}
              style={{ objectFit: 'cover' }}
              priority
            />
          )}

          <h2 className={`${styles.machineVideoHeader} ${styles.mobile} fade-in`}>
            {data.Title}
          </h2>
        </div>

        <div className={styles.machineContentBlock}>
          <div className={`${styles.machineContentRow} fade-in`}>
            <p className={styles.machineContentModel}>{data.TopLeftText}</p>
            <Image src={LogoSVG} alt="Hoset Logo" />
          </div>

          <div className={styles.machineContentRow}>
            <div className={styles.machineContentColumn}>
              <h2 className={`${styles.machineVideoHeader} ${styles.pc} fade-in`}>
                 {data.Title}
              </h2>
              

              {data.Button ? (
                <div className={`${styles.headerButtonsBlock} fade-in`}>
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

            </div>

            <div className={styles.machineContentColumn}>
              <Image src={LogoSVG} alt="Hoset Logo" />
              <div className={styles.machineLine}></div>
              <p className={styles.machineContentText}>
                 {data.Description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;