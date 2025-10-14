'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './StartScreen.module.css';
import { BASE_BACK_URL } from '@/services/api/requests';
import Button from '@/components/Button/Button';
import Logo from '@/assets/icons/logo.svg';

interface HomePageMediaPreview {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: any;
  folderPath: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale?: string;
}

interface Page {
  id: number;
  documentId: string;
  Title: string;
  slug: string;
  ColorCode?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  locale?: string;
  HomePageMediaPreview?: HomePageMediaPreview;
}

interface StartScreenProps {
  pages: Page[];
}

const StartScreen: React.FC<StartScreenProps> = ({ pages }) => {
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  React.useEffect(() => {
    // Управляем overflow body для десктоп версии
    const handleResize = () => {
      if (window.innerWidth > 700) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    };

    // Инициальная установка
    handleResize();
    
    // Слушаем изменения размера окна
    window.addEventListener('resize', handleResize);

    // Очищаем при размонтировании
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.load();
        video.play().catch(() => {
          // Если autoplay заблокирован, видео запустится при первом взаимодействии
        });
      }
    });
  }, []);

  const handleColumnHover = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play().catch(() => {});
    }
  };

  return (
    <div className={styles.startScreen}>
      {/* Desktop version - columns */}
      <div 
        className={styles.startScreenColumns}
        style={{ '--columns-count': pages.length } as React.CSSProperties}
      >
        {pages.map((page, index) => {
          const mediaUrl = page.HomePageMediaPreview 
            ? BASE_BACK_URL + page.HomePageMediaPreview.url 
            : '';
          const mediaType = page.HomePageMediaPreview?.mime || '';
          const isVideo = mediaType.startsWith('video/');
          const isImage = mediaType.startsWith('image/');

          return (
            <div 
              key={page.id} 
              className={styles.startScreenColumn}
              onMouseEnter={() => handleColumnHover(index)}
            >
              {mediaUrl && isVideo && (
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  className={styles.startScreenVideo}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src={mediaUrl} type={mediaType} />
                </video>
              )}
              
              {mediaUrl && isImage && (
                <Image
                  className={styles.startScreenImage}
                  src={mediaUrl}
                  alt={page.Title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              )}

              <div className={styles.startScreenLogo}>
                <Link href={`/${page.slug}`}>
                  <div className={styles.startScreenBrand}>
                    <Image
                      src={Logo}
                      alt="BRAVEX"
                      className={styles.startScreenLogoImage}
                      width={158}
                      height={158}
                    />
                    <div className={styles.startScreenSubtitle}>
                      {page.Title.toUpperCase()}
                    </div>
                  </div>
                </Link>
                <Button 
                  variant="secondary" 
                  href={`/${page.slug}`}
                  className={styles.startScreenButton}
                >
                  Visit now
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile version - rows */}
      <div className={styles.startScreenRows}>
        {pages.map((page, index) => (
          <div 
            key={page.id} 
            className={`${styles.startScreenRow} ${index % 2 === 1 ? styles.blueBackground : ''}`}
          >
            <Link href={`/${page.slug}`}>
              <div className={styles.startScreenBrand}>
                <Image
                  src={Logo}
                  alt="BRAVEX"
                  className={styles.startScreenLogoImageMobile}
                  width={80}
                  height={80}
                />
                <div className={styles.startScreenSubtitle}>
                  {page.Title.toUpperCase()}
                </div>
              </div>
              <div className={styles.startScreenArrowRotated}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartScreen;