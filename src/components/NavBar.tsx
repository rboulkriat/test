import { FunctionComponent, useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export type NavBarType = {
  className?: string;
};

const NavBar: FunctionComponent<NavBarType> = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={[styles.navBar, className].join(" ")}>
      <div className={styles.backgroundDegrade} />
      <div className={styles.background} />
      <Link to="/" className={[styles.logoIcon, className].join(" ")}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt="Logo rbcreation"
          src="/logo@2x.png"
        />
       </Link>
      <button className={styles.burgerButton} onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={`${styles.navbarMenu} ${menuOpen ? styles.showMenu : ""}`}>
        <nav className={styles.aboutServicesContactMenu}>
          <a className={styles.aPropos}>A propos</a>
          <a className={styles.service}>Service</a>
          <a className={styles.contact}>Contact</a>
        </nav>
      </nav>
      <div className={styles.cart}>
        <img
          className={styles.shoppingBagIcon}
          loading="lazy"
          alt=""
          src="/shopping-bag.svg"
        />
      </div>
    </header>
  );
};

export default NavBar;
