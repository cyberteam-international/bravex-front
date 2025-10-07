import Image from "next/image";
import styles from "@/components/Header/Header.module.css";
import Button from "@/components/Button/Button";

// В зависимости от будущего дизайна возможно лучше будет вынести фон в пропсы
import HeroSectionBackground from '@/assets/head.webp';

const HeroSection = () => {
  return (
    <div className="container-mobile">
      <div className={styles["header-inner"]}>
        <div className={styles["head-back-wrap"]}>
          {/* <video src="./assets/head-video.mp4" className="header-back" muted autoplay loop playsinline preload="auto"></video> */}
          <Image
            className={styles["header-back"]}
            src={HeroSectionBackground}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles["header__content"]}>
          <h1 className={styles["header__head"]}>
            INNOVATIVE STEEL-LIGHT-CONCRETE SYSTEM FOR MODERN CONSTRUCTION
          </h1>
          <div className={styles["header__buttons-block"]}>

            <Button href="#products" variant="primary">Get free Estimate</Button>

            <Button href="#products" variant="secondary" className={styles["header-button-services"]}>Our services</Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
