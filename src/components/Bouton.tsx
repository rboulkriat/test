import { FunctionComponent } from "react";
import styles from "./Bouton.module.css";

export type BoutonType = {
  className?: string;
};

const Bouton: FunctionComponent<BoutonType> = ({ className = "" }) => {
  return (
    <div className={[styles.bouton, className].join(" ")}>
      <b className={styles.prendreRendezVous}>
        Découvrez nos créations de sites web
      </b>
    </div>
  );
};

export default Bouton;
