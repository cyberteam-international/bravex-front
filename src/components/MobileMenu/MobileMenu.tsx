'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from "@/assets/icons/logo.svg";
import { PAGES } from "@/config/pages.config";
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  id: string;
}

export default function MobileMenu({ id }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === `#${id}`) {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (link) {
        const href = link.getAttribute('href');
        if (href === `#${id}`) {
          e.preventDefault();
          setIsOpen(true);
          document.body.style.overflow = 'hidden';
          window.history.pushState(null, '', href);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleClick);

    // Проверяем текущий хеш при монтировании
    if (window.location.hash === `#${id}`) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleClick);
    };
  }, [id]);

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    window.history.pushState(null, '', window.location.pathname);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.menuOverlay}>
      <div className={styles.menuContent}>
        <div className={styles.menuHeader}>
          <Image src={Logo} width={120} height={35} alt="BRAVEX" className={styles.logo} priority />
          <button className={styles.closeButton} onClick={closeMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <nav className={styles.menuNav}>
          {PAGES.map((item) => (
            <Link 
              key={item.label}
              href={item.href} 
              className={`${styles.menuLink} ${item.href === pathname ? styles.active : ''}`}
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.socialLinks}>
          <a href="https://wa.me/1234567890" className={styles.socialLink} aria-label="WhatsApp">
            <Image 
              src="/assets/icons/wa-contacts.svg" 
              alt="WhatsApp" 
              width={24} 
              height={24} 
            />
          </a>
          <a href="https://t.me/bravex" className={styles.socialLink} aria-label="Telegram">
            <Image 
              src="/assets/icons/tel-contacts.svg" 
              alt="Telegram" 
              width={24} 
              height={24} 
            />
          </a>
          <a href="https://twitter.com/bravex" className={styles.socialLink} aria-label="X (Twitter)">
            <Image 
              src="/assets/icons/x.svg" 
              alt="X (Twitter)" 
              width={24} 
              height={24} 
            />
          </a>
          {/* <a href="https://linkedin.com/company/bravex" className={styles.socialLink} aria-label="LinkedIn">
            <Image 
              src="/assets/icons/in.svg" 
              alt="LinkedIn" 
              width={24} 
              height={24} 
            />
          </a> */}
        </div>
      </div>
    </div>
  );
}
