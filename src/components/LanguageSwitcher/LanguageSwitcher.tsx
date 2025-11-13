"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./LanguageSwitcher.module.css";

interface Language {
  code: string;
  label: string;
  url: string;
}

const languages: Language[] = [
  { code: "english", label: "EN", url: "https://bravexgroup.eu/" },
  { code: "russian", label: "RU", url: "https://russian.bravexgroup.eu/" },
  { code: "spanish", label: "ES", url: "https://spanish.bravexgroup.eu/" },
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Определяем текущий язык из переменной окружения
  const currentLanguageTag = process.env.NEXT_PUBLIC_LANGUAGE_TAG || "english";
  const currentLanguage =
    languages.find((lang) => lang.code === currentLanguageTag) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSwitcher} ref={dropdownRef}>
      <button
        className={`${styles.languageButton} ${isOpen ? styles.open : ""}`}
        onClick={toggleDropdown}
        aria-label="Select language"
      >
        <span className={styles.languageLabel}>{currentLanguage.label}</span>
        <div className={styles.arrow}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={isOpen ? "M18 15L12 9L6 15" : "M6 9L12 15L18 9"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className={styles.languageDropdown}>
          {languages
            .filter((lang) => lang.code !== currentLanguage.code)
            .map((language) => (
              <Link
                key={language.code}
                href={language.url}
                className={styles.languageOption}
                onClick={handleLanguageChange}
              >
                <span className={styles.languageLabel}>{language.label}</span>
                <svg
                  className={styles.chevron}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
