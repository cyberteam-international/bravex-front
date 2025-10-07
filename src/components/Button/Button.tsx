import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Button.module.css';
import WhiteArrowSVG from '@/assets/icons/white-arrow-svg.svg';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick
}) => {
  const buttonClass = `${styles.button} ${styles[`button-${variant}`]} ${className}`;

  const content = (
    <>
      <span className={styles.buttonText}>{children}</span>
      <Image
        src={WhiteArrowSVG}
        alt=""
        className={`${styles.buttonArrow} ${variant === 'secondary' ? styles.buttonArrowSecondary : ''}`}
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

export default Button;