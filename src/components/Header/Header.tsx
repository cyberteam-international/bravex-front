"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/icons/logo.svg";
import styles from "./Header.module.css";
import { getCurrentLanguage } from "@/utils/language";

const PRESENTATION_URL =
  "https://drive.google.com/file/d/1UdvDzwWRwDcaP5qjxAiPxDXvrcdG3oNQ/view?usp=sharing";

const getCatalogButtonText = () => {
  const language = getCurrentLanguage();

  if (language === "es") return "Presentación";
  if (language === "ru") return "Презентация";

  return "Presentation";
};

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src={Logo}
          width={120}
          height={35}
          alt=""
          className={styles.logo}
          priority
        />
      </Link>
      {/* <HeaderMenu /> */}

      <div className={styles.header_right}>
        <Link
          href={PRESENTATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["header-button-catalog"]}
        >
          {getCatalogButtonText()}
        </Link>
        <Link className={`${styles["burger-menu"]}`} href="#mobile-menu">
          <div className={styles["burger-btn"]}>
            <span className={styles["burger-line"]}></span>
            <span className={styles["burger-line"]}></span>
            <span className={styles["burger-line"]}></span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
