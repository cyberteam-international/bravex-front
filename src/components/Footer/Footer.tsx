import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import Logo from '@/assets/icons/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={`${styles.footerFirstRow} fade-in`}>
            
            <div className={styles.footerBlock}>
              <p className={styles.footerHeader}>Cryptopowered by</p>
              <Image 
                src={Logo}
                alt="Logo" 
                width={100}
                height={50}
                className={styles.footerLogo} 
              />
            </div>

            <div className={styles.footerBlock}>
              <p className={styles.footerHeader}>Products</p>
              <div className={styles.footerBlockLinks}>
                <Link href="#" className={styles.footerLink}>Spend</Link>
                <Link href="#" className={styles.footerLink}>On ramp</Link>
              </div>
            </div>

            <div className={styles.footerBlock}>
              <p className={styles.footerHeader}>About us</p>
              <div className={styles.footerBlockLinks}>
                <Link href="#" className={styles.footerLink}>Advantages</Link>
                <Link href="#" className={styles.footerLink}>Solutions</Link>
                <Link href="#" className={styles.footerLink}>Our clients</Link>
                <Link href="#" className={styles.footerLink}>About Us</Link>
                <Link href="#" className={styles.footerLink}>Contact Us</Link>
              </div>
            </div>

            <div className={styles.footerBlock}>
              <p className={styles.footerHeader}>Follow us</p>
              <div className={styles.footerBlockIcons}>
                <Link href="#" className={styles.footerIcon}>
                  <Image 
                    src="/assets/icons/wa-contacts.svg" 
                    alt="WhatsApp" 
                    width={20} 
                    height={20} 
                  />
                </Link>
                <Link href="#" className={styles.footerIcon}>
                  <Image 
                    src="/assets/icons/tel-contacts.svg" 
                    alt="Telegram" 
                    width={20} 
                    height={20} 
                  />
                </Link>
                <Link href="#" className={styles.footerIcon}>
                  <Image 
                    src="/assets/icons/x.svg" 
                    alt="X (Twitter)" 
                    width={20} 
                    height={20} 
                  />
                </Link>
                <Link href="#" className={styles.footerIcon}>
                  <Image 
                    src="/assets/icons/in.svg" 
                    alt="LinkedIn" 
                    width={20} 
                    height={20} 
                  />
                </Link>
              </div>
            </div>
            
          </div>

          <div className={styles.footerSecondRow}>
            <div className={styles.footerAddress}>
              <p className={styles.footerAddressName}>Hoset LLC</p>
              <p className={styles.footerAddressText}>
                Al. Bolestawa Krzywoustego
                40-870 Katowice
              </p>
            </div>
            
            <div className={styles.footerPay}>
              <Image 
                src="/assets/icons/visa.svg" 
                alt="Visa" 
                width={40} 
                height={24}
                className={styles.footerPayItem} 
              />
              <Image 
                src="/assets/icons/mastercard.svg" 
                alt="Mastercard" 
                width={40} 
                height={24}
                className={styles.footerPayItem} 
              />
              <Image 
                src="/assets/icons/swift.svg" 
                alt="SWIFT" 
                width={60} 
                height={24}
                className={`${styles.footerPayItem} ${styles.footerPayItemSwift}`} 
              />
              <Image 
                src="/assets/icons/sepa.svg" 
                alt="SEPA" 
                width={40} 
                height={24}
                className={styles.footerPayItem} 
              />
            </div>

            <div className={styles.footerPolicy}>
              <Link href="#" className={styles.footerPrivacyText}>Privacy</Link>
              <Link href="#" className={styles.footerPrivacyText}>Policy</Link>
              <Link href="#" className={styles.footerPrivacyText}>Terms & Conditions</Link>
            </div>

          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;