import { FunctionComponent } from "react";
import styles from "./ServicesPreview.module.css";

export type ServicesPreviewType = {
  className?: string;
  sITEUNEPAGE?: string;
  onePageImage?: string;
  siteDunePageIdalPourUne?: string;
  prsentationSuccincteEtEff?: string;
};

const ServicesPreview: FunctionComponent<ServicesPreviewType> = ({
  className = "",
  sITEUNEPAGE,
  onePageImage,
  siteDunePageIdalPourUne,
  prsentationSuccincteEtEff,
}) => {
  return (
    <div className={[styles.servicesPreview, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.siteUnePageWrapper}>
          <b className={styles.siteUnePage}>{sITEUNEPAGE}</b>
        </div>
        <div className={styles.onePageContent}>
          <img
            className={styles.onePageImage}
            loading="lazy"
            alt=""
            src={onePageImage}
          />
          <div className={styles.siteDunePageContainer}>
            <p className={styles.siteDunePage}>{siteDunePageIdalPourUne}</p>
            <p className={styles.prsentationSuccincteEt}>
              {prsentationSuccincteEtEff}
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.dcouvrir}>
              <b>Découvrir...</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPreview;
