"use client";


import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { SectionProps } from "@/shared/types/common";
import { BASE_BACK_URL } from "@/services/api/requests";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./ProjectsListSectionV2.module.css";
import SliderButtons from "@/components/SliderButtons/SliderButtons";

const ProjectsListSectionV2 = ({ data }: SectionProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const projects = data.Projects || [];

  if (!projects.length) {
    return null;
  }

  return (
    <div className="container-max">
      <div className={styles.projectsListInner}>
        <div className={styles.projectsListHead}>
          <h2 className={`${styles.projectsListHeadHeader} fade-in`}>{data.Title}</h2>
          {projects.length > 1 && (
            <SliderButtons
              onPrevClick={() => swiperRef.current?.slidePrev()}
              onNextClick={() => swiperRef.current?.slideNext()}
              lightVersion={data.lightVersion ?? true}
            />
          )}
        </div>

        <div className={`${styles.swiperWrapper} fade-in`}>
          <Swiper
            modules={[Navigation]}
            direction="horizontal"
            slidesPerView={1.15}
            spaceBetween={8}
            speed={500}
            simulateTouch={true}
            allowTouchMove={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              1000: {
                slidesPerView: 2.15,
                spaceBetween: 14,
              },
            }}
            className={styles.swiper}>
            {projects.map((project: any) => {
              const mediaPreview = project.MediaPreview;
              let mediaUrl = "";
              let mediaType = "";

              if (mediaPreview) {
                mediaUrl = BASE_BACK_URL + mediaPreview.url;
                mediaType = mediaPreview.mime || "";
              }

              const isVideo = mediaType.startsWith("video/");
              const isImage = mediaType.startsWith("image/");
              const categories = project.category_of_projects || [];

              return (
                <SwiperSlide key={project.id} className={styles.swiperSlide}>
                  <div className={styles.projectCard}>
                    <div className={styles.projectMediaContainer}>
                      {mediaUrl && (
                        <>
                          {isVideo ? (
                            <video className={styles.projectMedia} muted autoPlay loop playsInline preload="auto">
                              <source src={mediaUrl} type={mediaType} />
                            </video>
                          ) : isImage ? (
                            <Image src={mediaUrl} alt={project.Title || "Project image"} fill style={{ objectFit: "cover" }} className={styles.projectMedia} />
                          ) : null}
                        </>
                      )}

                      <div className={styles.projectOverlay}>
                        {categories.length > 0 && (
                          <div className={styles.projectCategories}>
                            {categories.map((category: any) => (
                              <span key={category.id} className={styles.categoryBadge}>
                                {category.Name}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className={styles.projectContent}>
                          <div className={styles.projectButton}>
                            <div className={styles.projectButtonContent}>
                              <h3 className={styles.projectTitle}>{project.Title}</h3>
                              <p className={styles.projectDescription}>{project.Description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.projectInfoMobile}>
                      <h3 className={styles.projectTitleMobile}>{project.Title}</h3>
                      <p className={styles.projectDescriptionMobile}>{project.Description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectsListSectionV2;
