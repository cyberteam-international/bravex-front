import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/icons/logo.svg";
import styles from "./Header.module.css";
import HeaderMenu from "./HeaderMenu";

const Header = () => {  
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={Logo} width={120} height={35} alt="" className={styles.logo} priority />
      </Link>
      <HeaderMenu />
        
        <div className={styles.header_right}>
          <Link href="#technology" className={styles['header-button-catalog']}>Catalog</Link>
          <Link className={`${styles['burger-menu']}`} href="#mobile-menu">
              <div className={styles['burger-btn']}>
                  <span className={styles['burger-line']}></span>
                  <span className={styles['burger-line']}></span>
                  <span className={styles['burger-line']}></span>
              </div>           
          </Link>
        </div>
    </header>
  );
}

export default Header;