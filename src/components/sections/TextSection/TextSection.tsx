import React from 'react';
import styles from './TextSection.module.css';
import type { SectionProps } from "@/shared/types/common";


const TextSection = ({ data }: SectionProps) => {
  const { Title, Content } = data;

  return (
    <section className={styles.textSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{Title}</h2>
        <div 
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: Content }}
        />
      </div>
    </section>
  );
};

export default TextSection;