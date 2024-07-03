import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.r11Wrapper}>
            <img
              className={styles.r11}
              loading="lazy"
              alt=""
              src="/r-1-1@2x.png"
            />
          </div>
          <div className={styles.footerLinks}>
            <b className={styles.aPropos}>A propos</b>
          </div>
          <div className={styles.footerLinks1}>
            <b className={styles.service}>Service</b>
          </div>
          <div className={styles.footerLinks2}>
            <b className={styles.contact}>Contact</b>
          </div>
        </div>
        <div className={styles.footerDividerWrapper}>
          <div className={styles.footerDivider} />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.rbcreationWrapper}>
              <div className={styles.rbcreation}>@rbcreation</div>
            </div>
            <b
              className={styles.copyrightAllRights}
            >{`©Copyright. All rights reserved. `}</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
