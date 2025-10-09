import React from 'react';
import Image from 'next/image';
import styles from './IncludedSection.module.css';
import MediumButton from '@/components/MediumButton/MediumButton';
import LogoSVG from '@/assets/icons/logo.svg';
import type { SectionProps, IncludedBlockData } from '@/shared/types/common';
import { BASE_BACK_URL } from "@/services/api/requests";







const IncludedSection = ({ data }: SectionProps) => {


  const includedData: IncludedBlockData[] = data.IncludedBoxes;

  return (
    <div key={data.id} className="container">
      <div className={styles.includedInner}>
        <div className={styles.includedHead}>
          <h2 className={`${styles.includedHeadHeader} fade-in`}>
            <pre className={styles.pc}>
              {<p dangerouslySetInnerHTML={{ __html: data.Title.replace(/\s*\./g, '<br>.') }} />}
            </pre>
            <pre className={styles.mobile}>
              {<p dangerouslySetInnerHTML={{ __html: data.Title.replace(/\s*\./g, '<br>.') }} />}
            </pre>
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
              <Image
                className={`${styles.includedBlockImage} fade-in`}
                src={BASE_BACK_URL + block.Image.url}
                alt=""
                width={800}
                height={581}
                priority
              />
              <div className={styles.includedBlockWrap}>
                <p className={`${styles.includedBlockNumber} fade-in`}>
                  {block.Number}
                </p>
                <div className={`${styles.includedBlockRow} fade-in`}>
                  <p className={styles.includedBlockName}>{block.Title}</p>
                  <p className={styles.includedBlockText}>{block.Description}</p>
                  {/* <MediumButton href={block.buttonHref}>
                    {block.buttonText}
                  </MediumButton> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncludedSection;