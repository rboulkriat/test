import { FunctionComponent } from "react";
import styles from "./Bouton1.module.css";

export type Bouton1Type = {
  className?: string;
};

const Bouton1: FunctionComponent<Bouton1Type> = ({ className = "" }) => {
  return (
    <button className={[styles.bouton, className].join(" ")}>
      <a className={styles.prendreRendezVous}>Prendre rendez-vous</a>
    </button>
  );
};

export default Bouton1;
