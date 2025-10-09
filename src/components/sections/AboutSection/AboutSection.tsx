import Image from 'next/image';
import styles from './AboutSection.module.css';
import Logo from '@/assets/icons/logo.svg';
import Button from "@/components/Button/Button";
import type { SectionProps } from '@/shared/types/common';
import { BASE_BACK_URL } from '@/services/api/requests';

const AboutSection = ({ data }: SectionProps) => {
  let SectionBackground = BASE_BACK_URL + data.Image.url;
  
  return (
    <div className="container-max">
      <div className={styles.aboutInner}>
        <div className={styles.aboutImageWrap}>
          <Image
            className={`${styles.aboutImageLogo} fade-in`}
            src={Logo}
            alt=""
            width={158}
            height={158}
          />
          <Image
            className={styles.aboutImageItem}
            src={SectionBackground}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.aboutContent}>
          <h2 className={`${styles.aboutContentHeader} fade-in`}>
           {data.Title}
          </h2>
          <p className={`${styles.aboutContentText} fade-in`}>
            {data.Description}
          </p>


          {data.Button ? (
            <Button href={data.Button.href} variant={data.Button.Variant}>
                  {data.Button.Text}
                </Button>
          ) : null}

        </div>
      </div>
    </div>
  );
};

export default AboutSection;