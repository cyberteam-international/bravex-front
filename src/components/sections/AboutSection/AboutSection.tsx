import Image from 'next/image';
import styles from './AboutSection.module.css';
import Logo from '@/assets/icons/logo.svg';
import Button from "@/components/Button/Button";
import type { SectionProps } from '@/shared/types/common';
import { BASE_BACK_URL } from '@/services/api/requests';

const AboutSection = ({ data }: SectionProps) => {
  let SectionBackground = '';
  if (data.Image) {
    if (Array.isArray(data.Image)) {
      SectionBackground = data.Image.length > 0 ? BASE_BACK_URL + data.Image[0].url : '';
    } else {
      SectionBackground = BASE_BACK_URL + data.Image.url;
    }
  }
  
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
          {data.Image && SectionBackground && (
            <Image
              className={styles.aboutImageItem}
              src={SectionBackground}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>

        <div className={styles.aboutContent}>
          <h2 className={`${styles.aboutContentHeader} fade-in`} dangerouslySetInnerHTML={{ __html: data.Title || '' }}>
          
          </h2>
          <p className={`${styles.aboutContentText} fade-in`}>
            {data.Description}
          </p>


          {data.Button ? (
            (() => {
              const button = Array.isArray(data.Button) ? data.Button[0] : data.Button;
              return (
                <Button href={button.href} variant={button.Variant}>
                  {button.Text}
                </Button>
              );
            })()
          ) : null}

        </div>
      </div>
    </div>
  );
};

export default AboutSection;