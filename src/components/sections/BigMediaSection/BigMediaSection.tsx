'use client'
import React from 'react';
import type { SectionProps } from '@/shared/types/common';
import Image from 'next/image';
import styles from './BigMediaSection.module.css';
import { BASE_BACK_URL } from "@/services/api/requests";

const BigMediaSection = ({ data }: SectionProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

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
      <div className={styles.bigMediaInner}>
        <div className={`${styles.bigMediaBlock} fade-in`}>
          {mediaUrl && (
            <>
              {isVideo ? (
                <video
                  ref={videoRef}
                  className={styles.bigMediaContent}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                >
                  <source
                    src={mediaUrl}
                    type="video/mp4"
                  />
                </video>
              ) : isImage ? (
                <Image
                  src={mediaUrl}
                  alt="Media content"
                  fill
                  className={styles.bigMediaContent}
                  style={{ objectFit: 'cover' }}
                  priority
                />
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BigMediaSection;
