import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import ServicesPreview from "../components/ServicesPreview";
import Footer from "../components/Footer";
import styles from "./decouvrir.module.css";
import { Link } from "react-router-dom";

const Decouvrir: FunctionComponent = () => {
  return (
    <>
      <div className={styles.acceuil}>
        <section className={styles.navBarParent}>
          <NavBar />
        </section>
      </div>
      <div className={styles.decouvrir}>
        <main className={styles.content}>
          <section className={styles.hero}>
            <div className={styles.explorezNosServicesCompletsWrapper}>
              <div className={styles.explorezNosServicesContainer}>
                <p className={styles.explorezNosServices}>
                  <br></br>
                  <br></br>
                  Explorez nos services complets et découvrez nos modèles prêts à
                  l'emploi pour créer et déployer votre site web avec facilité et
                  efficacité. Que vous soyez une petite entreprise, un
                  entrepreneur individuel ou une grande organisation, nous avons
                  des solutions adaptées à vos besoins spécifiques. Parcourez
                  notre sélection de designs professionnels et modernes, optimisés
                  pour une expérience utilisateur exceptionnelle et un
                  référencement naturel performant.
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.nosServicesIncluent}>
                  Nos services incluent la conception sur mesure, l'intégration de
                  fonctionnalités avancées, l'optimisation pour les moteurs de
                  recherche (SEO), et un support technique dédié pour vous
                  accompagner à chaque étape de votre projet. Découvrez également
                  nos options d'hébergement sécurisé et nos outils de gestion de
                  contenu intuitifs, permettant une mise à jour simple et rapide
                  de votre site.
                </p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.avecNotreExpertiseEtNotre}>
                  <b>
                    Avec notre expertise et notre engagement envers la qualité,
                    transformez votre vision en réalité et donnez à votre présence
                    en ligne l'impact qu'elle mérite !
                  </b>
                </p>
              </div>
            </div>
            <div className={styles.servicesContainer}>
              <Link to="/Decouvrir/site-une-page" className={styles.serviceLink}>
                <ServicesPreview
                  sITEUNEPAGE="SITE UNE PAGE"
                  onePageImage="/2-1@2x.png"
                  siteDunePageIdalPourUne="Site d'une page : Idéal pour une "
                  prsentationSuccincteEtEff="présentation succincte et efficace"
                />
              </Link>
              <Link to="/Decouvrir/site-vitrine" className={styles.serviceLink}>
                <ServicesPreview
                  sITEUNEPAGE="SITE VITRINE"
                  onePageImage="/4-1@2x.png"
                  siteDunePageIdalPourUne="Site vitrine : Pour mettre en valeur"
                  prsentationSuccincteEtEff="votre entreprise et vos services."
                />
              </Link>
              <Link to="/Decouvrir/site-e-commerce" className={styles.serviceLink}>
                <ServicesPreview
                  sITEUNEPAGE="SITE E-COMMERCE"
                  onePageImage="/5-1@2x.png"
                  siteDunePageIdalPourUne="Site e-commerce : Pour vendre vos "
                  prsentationSuccincteEtEff="produits en ligne avec facilité."
                />
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Decouvrir;
