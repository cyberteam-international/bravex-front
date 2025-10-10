import Image from 'next/image';
import styles from './AdvantagesSectionV2.module.css';
import LogoSVG from '@/assets/icons/logo.svg';
import { BASE_BACK_URL } from "@/services/api/requests";

import type { SectionProps, AdvantageItem } from '@/shared/types/common';

const AdvantagesSectionV2 = ({ data }: SectionProps) => {  
  const advantagesData: AdvantageItem[] = data.AdvantagesBoxes || [];

  return (
    <div className="container-max"> 
      <div className={styles.advantagesInner}>
        <div className={styles.advantagesHead}>
          <h2 className={`${styles.advantagesHeadHeader} fade-in`}>{data.Title}</h2>
         
          <div className={styles.advantagesHeadRight}>
            <Image 
                src={LogoSVG} 
                alt="" 
                className={styles.logoHeader} 
                width={90} 
                height={26} 
            />
            
            <p className={`${styles.advantagesHeadText} fade-in`}>{data.Description}</p>
          </div>
          
        </div>

        <div className={styles.advantagesContent}>
          {advantagesData.map((advantage) => (
            <div key={advantage.id} className={`${styles.advantagesContentItem} fade-in`}>
               <div>
                    <div className={styles.advantagesIcon}>
                        <Image
                            src={BASE_BACK_URL + advantage.Icon.url}
                            alt={advantage.Title}
                            width={64}
                            height={64}
                            className={styles.iconImage}
                        />
                    </div>
               </div>
              <div>
                <h3 className={styles.advantagesName}>{advantage.Title}</h3>
                <p className={styles.advantagesText}>{advantage.Description}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSectionV2;