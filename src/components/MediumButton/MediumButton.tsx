import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './MediumButton.module.css';
import WhiteArrowSVG from '@/assets/icons/white-arrow-svg.svg';

export interface MediumButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const MediumButton: React.FC<MediumButtonProps> = ({
  children,
  href,
  className = '',
  onClick
}) => {
  const buttonClass = `${styles.mediumButton} ${className}`;

  const content = (
    <>
      <span className={styles.buttonText}>{children}</span>
      <Image
        src={WhiteArrowSVG}
        alt=""
        className={styles.buttonArrow}
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClass} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {content}
    </button>
  );
};

export default MediumButton;