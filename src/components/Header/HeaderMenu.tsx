"use client";

import { useState, useEffect } from "react";
import { PAGES } from "@/config/pages.config";
import HeaderMenuLink from "./HeaderMenuLink";
import styles from "./Header.module.css";
import { getGeneralData } from "@/services/api/requests";

import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();
  const [menuData, setMenuData] = useState<any[]>([]);

  useEffect(() => {
    getGeneralData()
      .then((res) => {
        let MenuData = res.data.data.header_menu;
        console.log(MenuData);
        console.log(typeof MenuData);
        setMenuData(MenuData);
      })
      .catch((err) => {
        console.error("Error fetching general data:", err);
      });
  }, []);

  return (
    <ul className={styles["nav-menu"]}>
      {menuData.map((item: any) => (
        <HeaderMenuLink
          key={item.Title}
          item={item}
          //
          isActive={item.slug === pathname}
        />
      ))}
    </ul>
  );
};
export default HeaderMenu;
