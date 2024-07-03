import { FunctionComponent } from "react";
import Bouton1 from "./Bouton1";
import styles from "./NavBar.module.css";

export type NavBarType = {
  className?: string;
};

const NavBar: FunctionComponent<NavBarType> = ({ className = "" }) => {
  return (
    <header className={[styles.navBar, className].join(" ")}>
      <div className={styles.backgroundDegrade} />
      <div className={styles.background} />
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <nav className={styles.navbarMenu}>
        <nav className={styles.aboutServicesContactMenu}>
          <a className={styles.aPropos}>A propos</a>
          <a className={styles.service}>Service</a>
          <a className={styles.contact}>Contact</a>
        </nav>
      </nav>
      <div className={styles.boutonWrapper}>
        <Bouton1 />
      </div>
    </header>
  );
};

export default NavBar;
