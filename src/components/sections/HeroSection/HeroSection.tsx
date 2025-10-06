import Image from "next/image";
import styles from "@/components/Header/Header.module.css";

// В зависимости от будущего дизайна возможно лучше будет вынести фон в пропсы
import HeroSectionBackground from '@/assets/head.webp';
import WhiteArrowSVG from '@/assets/icons/white-arrow-svg.svg';

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

            <div className={`${styles["header__button"]} ${styles["header__button-estimate"]}`}>
              <span className={styles["header__button-text"]}>Get free Estimate</span>
              <Image
                src={WhiteArrowSVG}
                alt=""
                className={styles["header__button-arrow"]}
              />
            </div>

            <a
              href="#products"
              className={`${styles["header__button"]} ${styles["header__button-services"]}`}
            >
              <span className={styles["header__button-text"]}>Our services</span>
              <Image
                src={WhiteArrowSVG}
                alt=""
                className={styles["header__button-arrow"]}
              />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
