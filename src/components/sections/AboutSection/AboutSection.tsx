import Image from 'next/image';
import styles from './AboutSection.module.css';
import Logo from '@/assets/icons/logo.svg';
import AboutSectionBackground from '@/assets/about.webp';
import Button from "@/components/Button/Button";

const AboutSection: React.FC = () => {
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
            src={AboutSectionBackground}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.aboutContent}>
          <h2 className={`${styles.aboutContentHeader} fade-in`}>
            WHAT IS <span className={styles.aboutContentHeaderText}>STEEL-LIGHT-CONCRETE SYSTEM</span>
          </h2>
          <p className={`${styles.aboutContentText} fade-in`}>
            Steel-Light-Concrete is a modern construction technology that combines a strong galvanized steel frame with lightweight foam concrete, creating warm, durable, and energy-efficient buildings. The steel frame provides exceptional load-bearing capacity and long-term stability, while the monolithic foam concrete core delivers excellent thermal and acoustic insulation.
          </p>


          <Button href="#contact" variant="primary" className={`fade-in`}>Get free Estimate</Button>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;