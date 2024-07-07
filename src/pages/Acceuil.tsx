import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./Acceuil.module.css";

const Acceuil: FunctionComponent = () => {
  return (
    <div className={styles.acceuil}>
      <section className={styles.navBarParent}>
        <NavBar />
        <GroupComponent />
      </section>
      <FrameComponent />
      <br></br>
      <section className={styles.graphiqueAnalyseSwotMinimalWrapper}>
        <img
          className={styles.graphiqueAnalyseSwotMinimal}
          loading="lazy"
          alt=""
          src="/graphique-analyse-swot-minimaliste-moderne-beige-color-2-1@2x.png"
        />
      </section>
      <Footer />
    </div>
  );
};

export default Acceuil;
