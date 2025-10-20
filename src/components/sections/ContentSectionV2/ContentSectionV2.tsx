import React from 'react';
import type { ContentSectionData } from '@/shared/types/common';
import ContentSectionV2Row from './ContentSectionV2Row';
import styles from './ContentSectionV2.module.css';

interface ContentSectionV2Props {
  data: ContentSectionData;
}

const ContentSectionV2: React.FC<ContentSectionV2Props> = ({ data }) => {
  const { Rows } = data;

  if (!Rows || Rows.length === 0) {
    return null;
  }

  return (
    <div className="container-mobile">
      <section className={styles.contentSection}>
        <div className={styles.container}>
          {Rows.map((row, index) => (
            <ContentSectionV2Row 
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

export default ContentSectionV2;
