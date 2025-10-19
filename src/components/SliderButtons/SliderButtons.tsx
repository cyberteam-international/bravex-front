import Image from 'next/image';
import whiteArrow from '@/assets/icons/white-arrow-svg.svg';
import styles from './SliderButtons.module.css';

interface SliderButtonsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  prevText?: string;
  nextText?: string;
  className?: string;
  lightVersion?: boolean;
}

const SliderButtons = ({ 
  onPrevClick, 
  onNextClick, 
  prevText = "Prev.", 
  nextText = "Next",
  className = "",
  lightVersion = false
}: SliderButtonsProps) => {
  return (
    <div className={`${styles.sliderButtons} ${className} ${lightVersion ? styles.lightVersion : ''}`}>
      <div 
        className={`${styles.buttonPrev} ${styles.sliderButton}`}
        onClick={onPrevClick}
      >
        <div className={styles.buttonSliderArrow}>
          <Image src={whiteArrow} alt="Previous" />
        </div>
        <p>{prevText}</p>
      </div>
      <div 
        className={`${styles.buttonNext} ${styles.sliderButton}`}
        onClick={onNextClick}
      >
        <p>{nextText}</p>
        <div className={styles.buttonSliderArrow}>
          <Image src={whiteArrow} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default SliderButtons;