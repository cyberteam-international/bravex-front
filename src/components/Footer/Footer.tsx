"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import Logo from "@/assets/icons/logo.svg";
import { getGeneralData } from "@/services/api/requests";

const Footer: React.FC = () => {
  const [menuData, setMenuData] = useState<any[]>([]);

  useEffect(() => {
    getGeneralData()
      .then((res) => {
        let MenuData = res.data.data.header_menu; // Используем те же данные, что и в хедере
        console.log("Footer MenuData:", MenuData);
        setMenuData(MenuData);
      })
      .catch((err) => {
        console.error("Error fetching general data for footer:", err);
      });
  }, []);

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
              <p className={styles.footerHeader}>Navigation</p>
              <div className={styles.footerBlockLinks}>
                {menuData.map((item: any) => (
                  <Link
                    key={item.Title}
                    href={`/${item.slug}`}
                    className={styles.footerLink}
                  >
                    {item.Title}
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.footerBlock}>
              {/* <p className={styles.footerHeader}>Navigation</p>
              <div className={styles.footerBlockLinks}>
                <Link href="/steel" className={styles.footerLink}>Steel</Link>
                <Link href="/construction" className={styles.footerLink}>Construction</Link>
                <Link href="/showroom" className={styles.footerLink}>Shop</Link>
                <Link href="/development" className={styles.footerLink}>Development</Link>
              </div> */}
            </div>

            <div className={styles.footerBlock}>
              <p className={styles.footerHeader}>Follow us</p>
              <div className={styles.footerBlockIcons}>
                <Link
                  href="https://wa.me/34639778899"
                  target="_blank"
                  className={styles.footerIcon}
                >
                  <Image
                    src="/assets/icons/wa-contacts.svg"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/bravexgroup.eu"
                  target="_blank"
                  className={styles.footerIcon}
                >
                  <Image
                    src="/assets/icons/FooterInst.svg"
                    alt="Insragram"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link
                  href="mailto:info@bravexgroup.eu"
                  className={styles.footerIcon}
                  target="_blank"
                >
                  <Image
                    src="/assets/icons/FooterMail.svg"
                    alt="mail"
                    width={20}
                    height={20}
                  />
                </Link>
                {/* <Link href="#" className={styles.footerIcon}>
                  <Image
                    src="/assets/icons/in.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                  />
                </Link> */}
              </div>
            </div>
          </div>

          <div className={styles.footerSecondRow}>
            <div className={styles.footerAddress}>
              <p className={styles.footerAddressName}>BRAVEX CANARIAS, S.L.</p>
              {/* <p className={styles.footerAddressText}>
                Calle Baleares, 7-15, CP 38670, Adeje, S/C de Tenerife, España
              </p> */}
            </div>

            <div className={styles.footerContacts}>
              <a href="tel:+34639778899" className={styles.footerContactLink}>
                +34 639 77 88 99
              </a>
              <a
                href="mailto:info@bravexgroup.eu"
                className={styles.footerContactLink}
              >
                info@bravexgroup.eu
              </a>
            </div>

            <div className={styles.footerPolicy}>
              <Link href="#" className={styles.footerPrivacyText}>
                Privacy
              </Link>
              <Link href="#" className={styles.footerPrivacyText}>
                Policy
              </Link>
              <Link href="#" className={styles.footerPrivacyText}>
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
