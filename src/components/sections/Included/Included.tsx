import React from 'react';
import Image from 'next/image';
import styles from './Included.module.css';
import MediumButton from '@/components/MediumButton/MediumButton';
import LogoSVG from '@/assets/icons/logo.svg';

interface IncludedBlockData {
  id: number;
  image: string;
  number: string;
  name: string;
  text: string;
  buttonText: string;
  buttonHref?: string;
}

interface IncludedProps {
  className?: string;
}

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

const Included: React.FC<IncludedProps> = ({ className = '' }) => {
  return (
    <div className="container">
      <div className={styles.includedInner}>
        <div className={styles.includedHead}>
          <h2 className={`${styles.includedHeadHeader} fade-in`}>
            <pre className={styles.pc}>
              {`WHAT INCLUDED
.                     IN TLC-SYSTEM`}
            </pre>
            <pre className={styles.mobile}>
              {`WHAT INCLUDED
               IN TLC-SYSTEM`}
            </pre>
          </h2>

          <div className={`${styles.includedHeadContent} fade-in`}>
            <p className={styles.includedHeadContentText}>
              – is an innovative construction technology that combines durable steel structures with lightweight foam concrete casting.
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
                  <MediumButton href={block.buttonHref}>
                    {block.buttonText}
                  </MediumButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Included;