'use client';

import { PAGES } from "@/config/pages.config";
import HeaderMenuLink from "./HeaderMenuLink";
import styles from "./Header.module.css";

import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <ul className={styles['nav-menu']}>
      {PAGES.map((item) => (
        <HeaderMenuLink
            key={item.label}
            item={item}
            isActive={item.href === pathname}
        />
      ))}
    </ul>
  );
}
export default HeaderMenu;