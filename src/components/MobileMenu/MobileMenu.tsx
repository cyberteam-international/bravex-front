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
          <a href="mailto:info@bravex.com" className={styles.socialLink} aria-label="Email">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="https://wa.me/1234567890" className={styles.socialLink} aria-label="WhatsApp">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382C17.015 14.153 14.98 13.154 14.574 13.006C14.168 12.858 13.877 12.784 13.586 13.241C13.295 13.698 12.511 14.64 12.254 14.931C11.997 15.222 11.74 15.256 11.283 15.027C10.826 14.798 9.335 14.312 7.591 12.759C6.235 11.545 5.338 10.042 5.081 9.585C4.824 9.128 5.057 8.884 5.286 8.655C5.493 8.448 5.743 8.116 5.972 7.859C6.201 7.602 6.275 7.413 6.423 7.122C6.571 6.831 6.497 6.574 6.383 6.345C6.269 6.116 5.376 4.081 5.003 3.167C4.642 2.278 4.277 2.396 4.008 2.382C3.752 2.369 3.461 2.366 3.17 2.366C2.879 2.366 2.422 2.48 2.016 2.937C1.61 3.394 0.544 4.393 0.544 6.428C0.544 8.463 2.05 10.431 2.279 10.722C2.508 11.013 5.334 15.291 9.559 17.069C10.598 17.525 11.409 17.792 12.041 17.993C13.084 18.319 14.036 18.271 14.793 18.153C15.638 18.023 17.305 17.136 17.678 16.161C18.051 15.186 18.051 14.357 17.937 14.161C17.823 13.965 17.532 13.851 17.075 13.622L17.472 14.382Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="https://instagram.com/bravex" className={styles.socialLink} aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://t.me/bravex" className={styles.socialLink} aria-label="Telegram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5 3.5L2 10.5L8.5 13.5L11.5 20.5L15 15.5L21.5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.5 13.5L15 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
