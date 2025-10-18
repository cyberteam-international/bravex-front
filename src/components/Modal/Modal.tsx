'use client';

import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import Image from 'next/image';
import { sendToTelegram } from '@/services/api/requests';
import styles from './Modal.module.css';

interface ModalProps {
  id: string;
}

export default function Modal({ id }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === `#${id}`) {
        setIsOpen(true);
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
          window.history.pushState(null, '', href);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleClick);

    // Проверяем текущий хеш при монтировании
    if (window.location.hash === `#${id}`) {
      setIsOpen(true);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleClick);
    };
  }, [id]);

  const closeModal = () => {
    setIsOpen(false);
    window.history.pushState(null, '', window.location.pathname);
    setSubmitStatus('idle');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendToTelegram(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '' });
      setTimeout(() => {
        closeModal();
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={closeModal}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <h2 className={styles.modalTitle}>
          Submit an <span>application</span>
        </h2>

        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <div className={styles.formRow}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </div>

          <div className={styles.formRow}>
            <input
                type="email"
                name="email"
                placeholder="E-Mail"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.formInput}
            />

            <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
            >
                {isSubmitting ? 'Sending...' : 'Leave a request'}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
          </div>

          

          {submitStatus === 'success' && (
            <p className={styles.successMessage}>✓ Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className={styles.errorMessage}>✗ Failed to send message. Please try again.</p>
          )}
        </form>

        <div className={styles.socialLinks}>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
            <Image 
              src="/assets/icons/wa-contacts.svg" 
              alt="WhatsApp" 
              width={20} 
              height={20} 
            />
          </a>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Telegram">
            <Image 
              src="/assets/icons/tel-contacts.svg" 
              alt="Telegram" 
              width={20} 
              height={20} 
            />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
            <Image 
              src="/assets/icons/inst.svg" 
              alt="Instagram" 
              width={20} 
              height={20} 
            />
          </a>
          <a href="mailto:info@example.com" className={styles.socialIcon} aria-label="Email">
            <Image 
              src="/assets/icons/mail.svg" 
              alt="Email" 
              width={20} 
              height={20} 
            />
          </a>
        </div>
      </div>
    </div>
  );
}
