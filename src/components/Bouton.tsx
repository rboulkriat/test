import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./Bouton.module.css";

export type BoutonType = {
  className?: string;
};

const Bouton: FunctionComponent<BoutonType> = ({ className = "" }) => {
  return (
    <Link to="/Decouvrir" className={[styles.bouton, className].join(" ")}>
      <b className={styles.prendreRendezVous}>
        Découvrez nos créations de sites web
      </b>
    </Link>
  );
};

export default Bouton;
