import { FunctionComponent } from "react";
import Bouton from "./Bouton";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.nousAidonsLesEntreprisesParent}>
        <h1 className={styles.nousAidonsLesContainer}>
          <p className={styles.nousAidonsLesEntreprises}>
            <span className={styles.nousAidons}>Nous aidons</span>
            <span>{` les Entreprises `}</span>
          </p>
          <p className={styles.maximiserLeursVentes}>
            <span className={styles.maximiser}>{`à maximiser `}</span>
            <span className={styles.leursVentes}>leurs ventes</span>
          </p>
        </h1>
        <div className={styles.desStratgiesProuvesPourWrapper}>
          <div className={styles.desStratgiesProuves}>
            Des stratégies éprouvées pour transformer les simples curieux en
            clients fidèles avec un site web optimisé
          </div>
        </div>
      </div>
      <div className={styles.boutonWrapper}>
        <Bouton />
      </div>
      <img
        className={styles.reunionNoir1}
        loading="lazy"
        alt=""
        src="/reunion-noir-1@2x.png"
      />
    </div>
  );
};

export default GroupComponent;
