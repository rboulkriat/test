import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.acceuilInner, className].join(" ")}>
      <div className={styles.explorezNosServicesCompletsParent}>
        <b className={styles.explorezNosServices}>
          Explorez nos services complets et découvrez nos modèles prêts à
          l'emploi pour créer et déployer votre site web avec facilité et
          efficacité
        </b>
        <div className={styles.servicesTypesParent}>
          <div className={styles.servicesTypes}>
            <img
              className={styles.servicesTypesPlaceholder}
              loading="lazy"
              alt=""
              src="/2-1@2x.png"
            />
            <div className={styles.siteDunePageContainer}>
              <p
                className={styles.siteDunePage}
              >{`Site d'une page : Idéal pour une `}</p>
              <p className={styles.prsentationSuccincteEt}>
                présentation succincte et efficace
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.dcouvrir}>
                <b>Découvrir...</b>
              </p>
            </div>
          </div>
          <div className={styles.servicesTypes1}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/4-1@2x.png"
            />
            <div className={styles.siteVitrineContainer}>
              <p
                className={styles.siteVitrine}
              >{`Site vitrine : Pour mettre en valeur `}</p>
              <p className={styles.votreEntrepriseEt}>
                votre entreprise et vos services.
              </p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p className={styles.dcouvrir1}>
                <b>Découvrir...</b>
              </p>
            </div>
          </div>
          <div className={styles.servicesTypes2}>
            <img
              className={styles.icon1}
              loading="lazy"
              alt=""
              src="/5-1@2x.png"
            />
            <div className={styles.siteECommerceContainer}>
              <p
                className={styles.siteECommerce}
              >{`Site e-commerce : Pour vendre vos `}</p>
              <p className={styles.produitsEnLigne}>
                produits en ligne avec facilité.
              </p>
              <p className={styles.blankLine2}>&nbsp;</p>
              <p className={styles.dcouvrir2}>
                <b>Découvrir...</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
