import React from 'react';
import Image from 'next/image';
import styles from './IncludedSectionV2.module.css';
import MediumButton from '@/components/MediumButton/MediumButton';
import LogoSVG from '@/assets/icons/logo.svg';
import type { SectionProps, IncludedBlockData } from '@/shared/types/common';
import { BASE_BACK_URL } from "@/services/api/requests";
import Button from '@/components/Button/Button';







const IncludedSectionV2 = ({ data }: SectionProps) => {
  const includedData: IncludedBlockData[] = data.IncludedBoxes || [];

  return (
    <div key={data.id} className="container">
      <div className={styles.includedInner}>
        <div className={`${styles.includedHead} ${data.lightVersion ? styles.lightVersion : ''}`}>
          <h2 className={`${styles.includedHeadHeader} fade-in`}>
            {data.Title}
          </h2>

          <div className={`${styles.includedHeadContent} fade-in`}>
            <p className={styles.includedHeadContentText}>
              {data.Description}
            </p>
            <Image 
              src={LogoSVG} 
              alt="" 
              className={styles.logoHeader}
            />
          </div>
        </div>

        <div className={styles.includedContent}>
          {includedData.map((block) => (

            <div key={block.id} className={styles.includedBlock}>
              {(block.Image?.url || block.image) && (
                <Image
                  className={`${styles.includedBlockImage} fade-in`}
                  src={BASE_BACK_URL + (block.Image?.url || block.image)}
                  alt=""
                  width={800}
                  height={581}
                  priority
                />
              )}
              <div className={styles.includedBlockWrap}>
                <div className={`${styles.includedBlockRow} fade-in`}>
                    <div className={styles.includedBlockInfo}>
                        <p className={styles.includedBlockName}>{block.Title || block.name}</p>
                        <p className={styles.includedBlockText}>{block.Description || block.text}</p>
                    </div>
                  
                  {block.Button ? (
                    <Button href={block.Button.href} className={styles.includedBlockButton}>{block.Button.Text}</Button>
                  ): null}

                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncludedSectionV2;
