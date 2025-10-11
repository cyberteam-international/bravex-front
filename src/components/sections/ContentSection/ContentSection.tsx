import React from 'react';
import type { ContentSectionData } from '@/shared/types/common';
import ContentSectionRow from './ContentSectionRow';
import styles from './ContentSection.module.css';

interface ContentSectionProps {
  data: ContentSectionData;
}

const ContentSection: React.FC<ContentSectionProps> = ({ data }) => {
  const { Rows } = data;

  if (!Rows || Rows.length === 0) {
    return null;
  }

  return (
    <div className="container-mobile">
      <section className={styles.contentSection}>
        <div className={styles.container}>
          {Rows.map((row, index) => (
            <ContentSectionRow 
              key={row.id} 
              data={row} 
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContentSection;