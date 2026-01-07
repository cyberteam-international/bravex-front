"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/icons/logo.svg";
import styles from "./Header.module.css";

const getShowroomUrl = () => {
  if (typeof window === "undefined") return "/showroom";
  const host = window.location.host;
  if (host.startsWith("spanish."))
    return "https://spanish.bravexgroup.eu/showrum";
  if (host.startsWith("russian."))
    return "https://russian.bravexgroup.eu/shourum";
  return "https://bravexgroup.eu/showroom";
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
          href={getShowroomUrl()}
          className={styles["header-button-catalog"]}
        >
          Catalog
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
