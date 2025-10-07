'use client'
import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import styles from './MachineSection.module.css';

// Import logo
import LogoSVG from '@/assets/icons/logo.svg';

const MachineSection: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch(() => {
        // Если autoplay заблокирован, видео запустится при первом взаимодействии
      });
    }
  }, []);

  return (
    <div className="container-max">
      <div className={styles.machineInner}>
        <div className={`${styles.machineVideoBlock} fade-in`}>
          <video
            ref={videoRef}
            className={styles.machineVideoBack}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
          >
            {/* Desktop version */}
            <source
              src="/assets/machine.mp4"
              type="video/mp4"
              media="(min-width: 1000px)"
            />
            {/* Mobile version */}
            <source
              src="/assets/machine-mobile.mp4"
              type="video/mp4"
              media="(max-width: 999px)"
            />
          </video>

          <h2 className={`${styles.machineVideoHeader} ${styles.mobile} fade-in`}>
            LIGHT STEEL ROLL FORMING MACHINE
          </h2>
        </div>

        <div className={styles.machineContentBlock}>
          <div className={`${styles.machineContentRow} fade-in`}>
            <p className={styles.machineContentModel}>HOSET STEELLINE 2500</p>
            <Image src={LogoSVG} alt="Hoset Logo" />
          </div>

          <div className={styles.machineContentRow}>
            <div className={styles.machineContentColumn}>
              <h2 className={`${styles.machineVideoHeader} ${styles.pc} fade-in`}>
                LIGHT STEEL ROLL FORMING MACHINE
              </h2>
              
              <div className={`${styles.headerButtonsBlock} fade-in`}>
                <Button variant="primary" className={styles.headerButtonEstimate}>
                  Get free Estimate
                </Button>

                <Button 
                  variant="secondary" 
                  href="#products" 
                  className={styles.headerButtonServices}
                >
                  Learn more
                </Button>
              </div>  
            </div>

            <div className={`${styles.machineContentColumn} fade-in`}>
              <Image src={LogoSVG} alt="Hoset Logo" />
              <div className={styles.machineLine}></div>
              <p className={`${styles.machineContentText} fade-in`}>
                A high-precision roll forming machine for light steel, providing automated production of steel structures with high speed and accuracy. An ideal solution for frame construction, it combines innovative technology, reliability, and ease of use — accelerating building processes and minimizing waste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineSection;