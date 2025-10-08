import Image from "next/image";
import styles from "./HeroSection.module.css";
import Button from "@/components/Button/Button";
import { BASE_BACK_URL } from "@/services/api/requests";
import type { SectionProps } from "@/shared/types/common";


const HeroSection = ({ data }: SectionProps) => {
  let SectionBackground = BASE_BACK_URL + data.Image[0].formats.large.url;
  
  return (
    <div className="container-mobile">
      <div className={styles["hero-inner"]}>
        <div className={styles["head-back-wrap"]}>
          {/* <video src="./assets/head-video.mp4" className="header-back" muted autoplay loop playsinline preload="auto"></video> */}
          <Image
            className={styles["hero-back"]}
            src={SectionBackground}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles["hero__content"]}>
          <h1 className={styles["hero__head"]}>
            {data.Title}
          </h1>
          {data.Button ? (
            <div className={styles["hero__buttons-block"]}>
              {data.Button.map((button, index) => (
                <Button key={index} href={button.href} variant={button.Variant}>
                  {button.Text}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
