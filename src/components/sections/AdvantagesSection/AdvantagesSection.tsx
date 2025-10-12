import Image from 'next/image';
import styles from './AdvantagesSection.module.css';
import Logo from '@/assets/icons/logo.svg';

import type { SectionProps, AdvantageItem } from '@/shared/types/common';

const AdvantagesSection = ({ data }: SectionProps) => {  
const advantagesData: AdvantageItem[] = data.AdvantagesBoxes || [];


  return (
    <div className="container-max"> 
      <div className={styles.advantagesInner}>
        <div className={`${styles.advantagesHead} fade-in`}>
          <h2 className={styles.advantagesHeadHeader}>{data.Title}</h2>
          <Image src={Logo} alt="" className={`${styles.logoHeader} logo-header`} width={90} height={26} />
        </div>

        <div className={styles.advantagesContent}>
          {advantagesData.map((advantage, index) => (
            <div key={index} className={`${styles.advantagesContentItem} fade-in`}>
              <p className={styles.advantagesName}>{advantage.Title}</p>
              <p className={styles.advantagesText}>{advantage.Description || advantage.Descriptio}</p>
              <p className={styles.advantagesNumber}>{advantage.Number || advantage.number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;