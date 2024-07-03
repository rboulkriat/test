import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "./decouvrir.module.css";

const Decouvrir: FunctionComponent = () => {
  return (
    <div className={styles.acceuil}>
      <section className={styles.navBarParent}>
        <NavBar />
      </section>
      <section className={`${styles.contentSection} ${styles.leftAlign}`}>
        <h2>Découvrez Nos Services</h2>
        <p>
          Nous proposons une large gamme de services pour aider votre entreprise
          à maximiser son potentiel en ligne. De la création de sites web
          optimisés au marketing digital, nous avons tout ce qu'il vous faut pour réussir.
        </p>
        <br></br>
        <p>
          Nous proposons une large gamme de services pour aider votre entreprise
          à maximiser son potentiel en ligne. De la création de sites web
          optimisés au marketing digital, nous avons tout ce qu'il vous faut pour réussir.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </section>
      <Footer />
    </div>
  );
};

export default Decouvrir;
