import React from 'react';
import Image from 'next/image';
import styles from './IncludedSection.module.css';
import MediumButton from '@/components/MediumButton/MediumButton';
import LogoSVG from '@/assets/icons/logo.svg';
import type { SectionProps, IncludedBlockData } from '@/shared/types/common';



const includedData: IncludedBlockData[] = [
  {
    id: 1,
    image: '/assets/included1.webp',
    number: '/01',
    name: 'STEEL',
    text: 'A reliable steel frame ensures the strength and durability of the structure.',
    buttonText: 'Learn more'
  },
  {
    id: 2,
    image: '/assets/included2.webp',
    number: '/02',
    name: 'LIGHT CONCRETE',
    text: 'Foam concrete pouring creates a monolithic and heat-saving structure.',
    buttonText: 'Learn more'
  }
];



const IncludedSection = ({ data }: SectionProps) => {

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
                src={block.image}
                alt=""
                width={800}
                height={581}
                priority
              />
              <div className={styles.includedBlockWrap}>
                <p className={`${styles.includedBlockNumber} fade-in`}>
                  {block.number}
                </p>
                <div className={`${styles.includedBlockRow} fade-in`}>
                  <p className={styles.includedBlockName}>{block.name}</p>
                  <p className={styles.includedBlockText}>{block.text}</p>
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