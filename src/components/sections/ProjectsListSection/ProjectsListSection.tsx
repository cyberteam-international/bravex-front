'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { SectionProps } from '@/shared/types/common';
import { BASE_BACK_URL } from "@/services/api/requests";
import WhiteArrowSVG from '@/assets/icons/white-arrow-svg.svg';
import Button from '@/components/Button/Button';

import styles from './ProjectsListSection.module.css';

const ProjectsListSection = ({ data }: SectionProps) => {
  const projects = data.Projects || [];

  if (!projects.length) {
    return null;
  }

  return (
    <div className="container-max">
      <div className={styles.projectsListInner}>
        {/* Header */}
        <div className={styles.projectsListHead}>
          <h2 className={`${styles.projectsListHeadHeader} fade-in`}>{data.Title}</h2>
        </div>

        {/* Projects Grid */}
        <div className={`${styles.projectsGrid} fade-in`}>
          {projects.map((project: any) => {
            // Determine media type
            const mediaPreview = project.MediaPreview;
            let mediaUrl = '';
            let mediaType = '';
            
            if (mediaPreview) {
              mediaUrl = BASE_BACK_URL + mediaPreview.url;
              mediaType = mediaPreview.mime || '';
            }

            const isVideo = mediaType.startsWith('video/');
            const isImage = mediaType.startsWith('image/');

            // Get categories
            const categories = project.category_of_projects || [];
            
            return (
              <div
                key={project.id}
                className={styles.projectCard}
              >
                {/* Media Container */}
                <div className={styles.projectMediaContainer}>
                  {mediaUrl && (
                    <>
                      {isVideo ? (
                        <video
                          className={styles.projectMedia}
                          muted
                          autoPlay
                          loop
                          playsInline
                          preload="auto"
                        >
                          <source src={mediaUrl} type={mediaType} />
                        </video>
                      ) : isImage ? (
                        <Image
                          src={mediaUrl}
                          alt={project.Title || 'Project image'}
                          fill
                          style={{ objectFit: 'cover' }}
                          className={styles.projectMedia}
                        />
                      ) : null}
                    </>
                  )}
                  
                  {/* Overlay with content */}
                  <div className={styles.projectOverlay}>
                    {/* Categories */}
                    {categories.length > 0 && (
                      <div className={styles.projectCategories}>
                        {categories.map((category: any, index: number) => (
                          <Link href={`/projects?category=${category.id}`} key={category.id} className={styles.categoryBadge}>
                            {category.Name}
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    {/* Bottom content */}
                    <div className={styles.projectContent}>
                      <div className={styles.projectButton}>
                        <div className={styles.projectButtonContent}>
                          <h3 className={styles.projectTitle}>{project.Title}</h3>
                          <p className={styles.projectDescription}>{project.Description}</p>
                          <Button href={`/projects/${project.slug}`} variant="secondary">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsListSection;
