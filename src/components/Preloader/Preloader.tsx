'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Preloader.module.css';
import logoSrc from '@/assets/icons/logo.svg';

interface PreloaderProps {
  onComplete?: () => void;
  duration?: number;
}

const Preloader: React.FC<PreloaderProps> = ({ 
  onComplete, 
  duration = 2000 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Блокируем скролл при загрузке
    document.body.style.overflow = 'hidden';
    
    // Сбрасываем скролл в начало при загрузке
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Начинаем анимацию исчезновения
      const fadeOutInterval = setInterval(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          const opacity = parseFloat(getComputedStyle(preloader).opacity);
          if (opacity > 0) {
            preloader.style.opacity = (opacity - 0.1).toString();
          } else {
            clearInterval(fadeOutInterval);
            setIsVisible(false);
            document.body.style.overflow = '';
            onComplete?.();
          }
        }
      }, 15);
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [duration, onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div id="preloader" className={styles.preloader}>
      <Image 
        src={logoSrc} 
        alt="Logo" 
        width={50} 
        height={50}
        className={styles.logo}
        priority
      />
      <span className={styles.loader}></span>
    </div>
  );
};

export default Preloader;