'use client';

import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
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

          {submitStatus === 'success' && (
            <p className={styles.successMessage}>✓ Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className={styles.errorMessage}>✗ Failed to send message. Please try again.</p>
          )}
        </form>

        <div className={styles.socialLinks}>
          <a href="mailto:info@example.com" className={styles.socialIcon} aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4L10 11L17 4M3 4H17M3 4V16H17V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.477 0 0 4.477 0 10C0 11.89 0.525 13.66 1.438 15.168L0.546 18.2C0.496 18.371 0.546 18.555 0.676 18.676C0.761 18.761 0.871 18.805 0.984 18.805C1.039 18.805 1.094 18.797 1.148 18.778L4.352 17.965C5.785 18.783 7.438 19.25 9.215 19.25C14.738 19.25 19.215 14.773 19.215 9.25C19.215 3.727 14.738 0 10 0Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Telegram">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM14.742 6.761L13.176 14.717C13.059 15.273 12.734 15.406 12.273 15.148L9.687 13.273L8.437 14.476C8.308 14.605 8.199 14.714 7.949 14.714L8.121 12.062L12.882 7.796C13.082 7.616 12.835 7.515 12.562 7.695L6.648 11.382L4.101 10.554C3.558 10.382 3.546 10.015 4.222 9.757L14.054 5.882C14.507 5.718 14.898 5.992 14.742 6.761Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1.802C12.67 1.802 12.987 1.812 14.041 1.86C16.751 1.984 18.018 3.27 18.142 5.96C18.19 7.013 18.199 7.33 18.199 10C18.199 12.671 18.189 12.987 18.142 14.04C18.017 16.728 16.754 18.016 14.041 18.14C12.987 18.188 12.671 18.198 10 18.198C7.33 18.198 7.013 18.188 5.96 18.14C3.242 18.015 1.983 16.724 1.859 14.039C1.811 12.986 1.801 12.67 1.801 10C1.801 7.329 1.812 7.013 1.859 5.959C1.984 3.27 3.247 1.983 5.96 1.859C7.014 1.812 7.33 1.802 10 1.802ZM10 0C7.284 0 6.944 0.012 5.878 0.06C2.246 0.227 0.228 2.242 0.061 5.877C0.012 6.944 0 7.284 0 10C0 12.716 0.012 13.056 0.06 14.122C0.227 17.754 2.242 19.772 5.877 19.939C6.944 19.988 7.284 20 10 20C12.716 20 13.056 19.988 14.122 19.94C17.751 19.773 19.775 17.757 19.938 14.123C19.988 13.056 20 12.716 20 10C20 7.284 19.988 6.944 19.94 5.878C19.777 2.249 17.758 0.228 14.123 0.061C13.056 0.012 12.716 0 10 0ZM10 4.865C7.164 4.865 4.865 7.164 4.865 10C4.865 12.836 7.164 15.136 10 15.136C12.836 15.136 15.135 12.837 15.135 10C15.135 7.164 12.836 4.865 10 4.865ZM10 13.333C8.159 13.333 6.667 11.841 6.667 10C6.667 8.159 8.159 6.667 10 6.667C11.841 6.667 13.333 8.159 13.333 10C13.333 11.841 11.841 13.333 10 13.333ZM15.338 3.462C14.675 3.462 14.137 4 14.137 4.662C14.137 5.324 14.675 5.862 15.338 5.862C16 5.862 16.538 5.324 16.538 4.662C16.538 4 16 3.462 15.338 3.462Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
