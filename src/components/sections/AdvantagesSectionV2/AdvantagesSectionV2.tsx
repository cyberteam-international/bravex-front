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
        {data.Title || data.Description ? (
           <div className={styles.advantagesHead}>
              {data.Title ? (
                <h2 className={`${styles.advantagesHeadHeader} fade-in`}>{data.Title}</h2>
              ) : null}
              <div className={styles.advantagesHeadRight}>
                <Image 
                    src={LogoSVG} 
                    alt="" 
                    className={styles.logoHeader} 
                    width={90} 
                    height={26} 
                />
                {data.Description ? (
                  <p className={`${styles.advantagesHeadText} fade-in`}>{data.Description}</p>
                ) : null}
              </div>
            </div>
        ): null}
       

        <div className={styles.advantagesContent}>
          {advantagesData.map((advantage) => (
            <div key={advantage.id} className={`${styles.advantagesContentItem} fade-in`}>
               <div>
                    <div className={styles.advantagesIcon}>
                        {advantage.Icon?.url && (
                          <Image
                              src={BASE_BACK_URL + advantage.Icon.url}
                              alt={advantage.Title}
                              width={64}
                              height={64}
                              className={styles.iconImage}
                          />
                        )}
                    </div>
               </div>
              <div>
                <h3 className={styles.advantagesName}>{advantage.Title}</h3>
                <p className={styles.advantagesText}>{advantage.Description || advantage.Descriptio}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSectionV2;