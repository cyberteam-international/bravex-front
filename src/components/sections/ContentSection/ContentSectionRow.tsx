import Image from 'next/image';
import type { ContentSectionRow as ContentSectionRowType } from '@/shared/types/common';
import styles from './ContentSectionRow.module.css';
import { BASE_BACK_URL } from "@/services/api/requests";

interface ContentSectionRowProps {
  data: ContentSectionRowType;
  index: number;
}

const ContentSectionRow: React.FC<ContentSectionRowProps> = ({ data, index }) => {
  const { Title, Description, addSecondPicture, Image: imageData, Image2 } = data;

  console.log('Rendering ContentSectionRow with data:', data);
  
  // Определяем тип макета в зависимости от наличия второго изображения
  const layoutType = addSecondPicture && Image2 ? 'double-image' : 'single-image';
  
  // Определяем направление для single-image (четные индексы - слева направо, нечетные - справа налево)
  const isReversed = layoutType === 'single-image' && index % 2 !== 0;

  return (
    <div className={`${styles.contentRow} ${styles[layoutType]} ${isReversed ? styles.reversed : ''}`}>
      {layoutType === 'single-image' ? (
        <>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{Title}</h2>
            <p className={styles.description}>{Description}</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={BASE_BACK_URL + imageData.url}
              alt={Title}
              fill
              className={styles.image}
            />
          </div>
        </>
      ) : (
        <>
          <div 
            className={styles.leftImage}
            style={{maxWidth: imageData.width}}
          >
            <Image
              src={BASE_BACK_URL + imageData.url}
              alt={Title}
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{Title}</h2>
            <p className={styles.description}>{Description}</p>
          </div>
          <div 
            className={styles.rightImage}
            style={{maxWidth: Image2.width}}
          >
            <Image
              src={BASE_BACK_URL + Image2!.url}
              alt={Title}
              fill
              className={styles.image}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ContentSectionRow;