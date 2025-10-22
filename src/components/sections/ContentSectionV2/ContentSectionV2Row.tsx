import Image from 'next/image';
import type { ContentSectionRow as ContentSectionRowType } from '@/shared/types/common';
import styles from './ContentSectionV2Row.module.css';
import { BASE_BACK_URL } from "@/services/api/requests";

interface ContentSectionV2RowProps {
  data: ContentSectionRowType;
  index: number;
}

const ContentSectionV2Row: React.FC<ContentSectionV2RowProps> = ({ data, index }) => {
  const { Title, Description, addSecondPicture, Image: imageData, Image2 } = data;

  console.log('Rendering ContentSectionV2Row with data:', data);
  
  // Определяем направление по индексу: четные - текст слева, нечетные - текст справа
  const isTextLeft = index % 2 === 0;
  
  // Определяем количество изображений
  const hasTwoImages = addSecondPicture && Image2;

  return (
    <div className={`${styles.contentRow} ${isTextLeft ? styles.textLeft : styles.textRight} ${hasTwoImages ? styles.twoImages : styles.oneImage} fade-in`}>
      <div className={`${styles.textContent} fade-in`}>
        <h2 className={`${styles.title} fade-in`}>{Title}</h2>
        <p className={`${styles.description} fade-in`}>{Description}</p>
      </div>
      <div className={`${styles.imagesWrapper} fade-in`}>
        <div 
          className={`${styles.imageContainer} ${index === 0 ? styles.firstRowFirstImage : ''} fade-in`}
          style={{ 
            maxWidth: imageData.width, 
            aspectRatio: imageData.width && imageData.height ? `${imageData.width} / ${imageData.height}` : 'auto'
          }}
        >
          <Image
            src={BASE_BACK_URL + imageData.url}
            alt={Title}
            fill
            className={styles.image}
          />
        </div>
        {hasTwoImages && Image2 && (
          <div 
            className={`${styles.imageContainer} fade-in`}
            style={{ 
              maxWidth: Image2.width,
              aspectRatio: Image2.width && Image2.height ? `${Image2.width} / ${Image2.height}` : 'auto'
            }}
          >
            <Image
              src={BASE_BACK_URL + Image2.url}
              alt={Title}
              fill
              className={styles.image}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentSectionV2Row;
