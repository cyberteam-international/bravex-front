import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/icons/logo.svg";
import styles from "./Header.module.css";
import HeaderMenu from "./HeaderMenu";

const Header = () => {  
  return (
    <header className={styles.header}>
      <Image src={Logo} width={120} height={35} alt="" className={styles.logo} priority />
      <HeaderMenu />
        
        <Link href="#technology" className={styles['header-button-catalog']}>Catalog</Link>
        <div className={`${styles['burger-menu']} mobile`}>
            <div className={styles['burger-btn']}>
                <span className={styles['burger-line']}></span>
                <span className={styles['burger-line']}></span>
                <span className={styles['burger-line']}></span>
            </div>           
        </div>
    </header>
  );
}

export default Header;