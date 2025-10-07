import Image from "next/image";
import styles from "./TechnoSection.module.css";
import Button from "@/components/Button/Button";

const TechnoSection = () => {
  const technoBlocks = [
    { text: "Scandinavian projects" },
    { text: "Modern Houses" },
    { text: "Middle Eastern projects" },
    { text: "Single-storey homes" }
  ];

  return (
    <div className="container-max">
      <div className={styles["techno-inner"]}>
        <div className={`${styles["techno__video-block"]} fade-in`}>
          <video
            className={styles["techno__video-back"]}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
          >
            {/* pc */}
            <source
              src="/assets/techno.mp4"
              type="video/mp4"
              media="(min-width: 1000px)"
            />
            {/* mobile */}
            <source
              src="/assets/techno-mobile.mp4"
              type="video/mp4"
              media="(max-width: 999px)"
            />
          </video>
          
          <div className={`${styles["techno__video-head-wrap"]} mobile fade-in`}>
            <h2 className={styles["techno__video-header"]}>
              TECHNOLOGIES USED IN PROJECTS
            </h2>
            <div className={styles["techno__video-arrow"]}>
              <Image 
                src="/assets/icons/white-arrow-svg.svg" 
                alt="" 
                width={12}
                height={12}
              />
            </div>
          </div>
        </div>

        <div className={styles["techno__content-block"]}>
          <div className={`${styles["techno__content-row"]} fade-in`}>
            <p className={styles["techno__content-head"]}>
              TECHNOLOGIES USED IN PROJECTS
            </p>
            <Image 
              src="/assets/icons/logo.svg" 
              alt="" 
              width={92}
              height={40}
            />
          </div>

          <div className={styles["techno__content-row"]}>
            <div className={styles["techno__bloks-wrap"]}>
              {technoBlocks.map((block, index) => (
                <div 
                  key={index} 
                  className={`${styles["techno__block"]} fade-in`}
                >
                  <p className={styles["techno__block-text"]}>
                    {block.text}
                  </p>
                </div>
              ))}
            </div>

            <div className={`${styles["techno__content-column"]} fade-in`}>
              <Image 
                src="/assets/icons/logo.svg" 
                alt="" 
                width={92}
                height={40}
              />
              <div className={styles["techno-line"]}></div>
              <p className={`${styles["techno__content-text"]} fade-in`}>
                Our SLC technology delivers durable, energy-efficient homes and buildings across diverse climates
              </p>
              
              <Button variant="primary" className="fade-in">
                Get free Estimate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnoSection;