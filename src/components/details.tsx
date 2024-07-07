import { FunctionComponent } from "react";
import NavBar from "./NavBar";
import styles from "./Details.module.css";

interface DetailsProps {
    productName?: string; // Définir comme optionnel avec '?'
  }
  

  const Details: FunctionComponent<DetailsProps> = ({ productName }) => {
    if (!productName) {
      // Gérer le cas où productName est undefined
      return <div>Produit non trouvé</div>; // Par exemple, afficher un message d'erreur
    }
  
    // Fonction pour rendre le contenu en fonction du nom du produit
    const renderProductContent = () => {
      switch (productName.toLowerCase()) {
        case "site une page":
          return renderSiteUnePageContent();
        case "site e-commerce":
          return renderSiteECommerceContent();
        case "site vitrine":
          return renderSiteVitrineContent();
        default:
          return renderDefaultContent();
      }
    };

  const renderSiteUnePageContent = () => (
    <div className={styles.productDescription}>
      <span className={styles.descriptionDcouvrezContainer1}>
        <p className={styles.description}>
          <b>{`DESCRIPTION : `}</b>
        </p>
        <p className={styles.blankLine}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.dcouvrezNotreSite}>
          Découvrez notre site en une page : Votre Présence en Ligne
          en Une Seule Page.
        </p>
        <p className={styles.blankLine1}>&nbsp;</p>
        <p className={styles.avecCeTemplate}>
          Avec ce template, simplifiez votre présence en ligne avec un
          site web d'une seule page conçu pour captiver et convertir.
          Idéal pour les entreprises, freelances et startups, notre
          solution vous offre :
        </p>
        <ul className={styles.simplicitMaximaleUnSeul}>
          <li className={styles.simplicitMaximaleUnSeul1}>
            <span>
              Simplicité maximale : Un seul endroit pour présenter
              votre entreprise, vos services et vos produits de
              manière claire et concise.
            </span>
          </li>
          <li className={styles.impactVisuelDesignModerne}>
            <span>
              Impact visuel : Design moderne et élégant qui attire
              l'attention instantanément.
            </span>
          </li>
          <li className={styles.navigationIntuitiveParcour}>
            <span>
              Navigation intuitive : Parcourez facilement les
              informations essentielles sans jamais perdre vos
              visiteurs.
            </span>
          </li>
          <li className={styles.ractivitMobileAssurezUn}>
            <span>
              Réactivité mobile : Assurez une expérience utilisateur
              fluide sur tous les appareils, du bureau au smartphone.
            </span>
          </li>
          <li className={styles.rapiditDeMiseEnLigneD}>
            <span>
              Rapidité de mise en ligne : Démarrez rapidement avec
              notre processus de création simplifié.
            </span>
          </li>
          <li className={styles.blankLine2}>
            <span>&nbsp;</span>
          </li>
        </ul>
        <p className={styles.pourquoiChoisirNotre}>
          Pourquoi choisir notre site en une page ? Parce que votre
          présence en ligne mérite d'être à la fois professionnelle et
          efficace, sans complications inutiles.
        </p>
        <p className={styles.blankLine3}>&nbsp;</p>
        <p className={styles.dcouvrezCommentNotre}>
          Découvrez comment notre site en une page peut transformer
          votre présence en ligne aujourd'hui. Visitez [URL de votre
          site] pour commencer.
        </p>
        <img
          className={styles.productImage}
          loading="lazy"
          alt=""
          src="/site-une-page-image.png"
        />
      </span>
    </div>
  );

  const renderSiteECommerceContent = () => (
    <div className={styles.productDescription}>
      <span className={styles.descriptionDcouvrezContainer1}>
        <p className={styles.description}>
          <b>{`DESCRIPTION : `}</b>
        </p>
        <p className={styles.blankLine}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.dcouvrezNotreSite}>
          Découvrez notre site en une page : Votre Présence en Ligne
          en Une Seule Page.
        </p>
        <p className={styles.blankLine1}>&nbsp;</p>
        <p className={styles.avecCeTemplate}>
          Avec ce template, simplifiez votre présence en ligne avec un
          site web d'une seule page conçu pour captiver et convertir.
          Idéal pour les entreprises, freelances et startups, notre
          solution vous offre :
        </p>
        <ul className={styles.simplicitMaximaleUnSeul}>
          <li className={styles.simplicitMaximaleUnSeul1}>
            <span>
              Simplicité maximale : Un seul endroit pour présenter
              votre entreprise, vos services et vos produits de
              manière claire et concise.
            </span>
          </li>
          <li className={styles.impactVisuelDesignModerne}>
            <span>
              Impact visuel : Design moderne et élégant qui attire
              l'attention instantanément.
            </span>
          </li>
          <li className={styles.navigationIntuitiveParcour}>
            <span>
              Navigation intuitive : Parcourez facilement les
              informations essentielles sans jamais perdre vos
              visiteurs.
            </span>
          </li>
          <li className={styles.ractivitMobileAssurezUn}>
            <span>
              Réactivité mobile : Assurez une expérience utilisateur
              fluide sur tous les appareils, du bureau au smartphone.
            </span>
          </li>
          <li className={styles.rapiditDeMiseEnLigneD}>
            <span>
              Rapidité de mise en ligne : Démarrez rapidement avec
              notre processus de création simplifié.
            </span>
          </li>
          <li className={styles.blankLine2}>
            <span>&nbsp;</span>
          </li>
        </ul>
        <p className={styles.pourquoiChoisirNotre}>
          Pourquoi choisir notre site en une page ? Parce que votre
          présence en ligne mérite d'être à la fois professionnelle et
          efficace, sans complications inutiles.
        </p>
        <p className={styles.blankLine3}>&nbsp;</p>
        <p className={styles.dcouvrezCommentNotre}>
          Découvrez comment notre site en une page peut transformer
          votre présence en ligne aujourd'hui. Visitez [URL de votre
          site] pour commencer.
        </p>
        <img
          className={styles.productImage}
          loading="lazy"
          alt=""
          src="/site-une-page-image.png"
        />
      </span>
    </div>
  );

  const renderSiteVitrineContent = () => (
    <div className={styles.productDescription}>
     <span className={styles.descriptionDcouvrezContainer1}>
        <p className={styles.description}>
          <b>{`DESCRIPTION : `}</b>
        </p>
        <p className={styles.blankLine}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.dcouvrezNotreSite}>
          Découvrez notre site en une page : Votre Présence en Ligne
          en Une Seule Page.
        </p>
        <p className={styles.blankLine1}>&nbsp;</p>
        <p className={styles.avecCeTemplate}>
          Avec ce template, simplifiez votre présence en ligne avec un
          site web d'une seule page conçu pour captiver et convertir.
          Idéal pour les entreprises, freelances et startups, notre
          solution vous offre :
        </p>
        <ul className={styles.simplicitMaximaleUnSeul}>
          <li className={styles.simplicitMaximaleUnSeul1}>
            <span>
              Simplicité maximale : Un seul endroit pour présenter
              votre entreprise, vos services et vos produits de
              manière claire et concise.
            </span>
          </li>
          <li className={styles.impactVisuelDesignModerne}>
            <span>
              Impact visuel : Design moderne et élégant qui attire
              l'attention instantanément.
            </span>
          </li>
          <li className={styles.navigationIntuitiveParcour}>
            <span>
              Navigation intuitive : Parcourez facilement les
              informations essentielles sans jamais perdre vos
              visiteurs.
            </span>
          </li>
          <li className={styles.ractivitMobileAssurezUn}>
            <span>
              Réactivité mobile : Assurez une expérience utilisateur
              fluide sur tous les appareils, du bureau au smartphone.
            </span>
          </li>
          <li className={styles.rapiditDeMiseEnLigneD}>
            <span>
              Rapidité de mise en ligne : Démarrez rapidement avec
              notre processus de création simplifié.
            </span>
          </li>
          <li className={styles.blankLine2}>
            <span>&nbsp;</span>
          </li>
        </ul>
        <p className={styles.pourquoiChoisirNotre}>
          Pourquoi choisir notre site en une page ? Parce que votre
          présence en ligne mérite d'être à la fois professionnelle et
          efficace, sans complications inutiles.
        </p>
        <p className={styles.blankLine3}>&nbsp;</p>
        <p className={styles.dcouvrezCommentNotre}>
          Découvrez comment notre site en une page peut transformer
          votre présence en ligne aujourd'hui. Visitez [URL de votre
          site] pour commencer.
        </p>
        <img
          className={styles.productImage}
          loading="lazy"
          alt=""
          src="/site-une-page-image.png"
        />
      </span>
    </div>
  );

  const renderDefaultContent = () => (
    <div className={styles.productDescription}>
      <span className={styles.descriptionDcouvrezContainer1}>
        <p className={styles.description}>
          <b>{`DESCRIPTION : `}</b>
        </p>
        <p className={styles.blankLine}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.dcouvrezNotreSite}>
          Découvrez notre site en une page : Votre Présence en Ligne
          en Une Seule Page.
        </p>
        <p className={styles.blankLine1}>&nbsp;</p>
        <p className={styles.avecCeTemplate}>
          Avec ce template, simplifiez votre présence en ligne avec un
          site web d'une seule page conçu pour captiver et convertir.
          Idéal pour les entreprises, freelances et startups, notre
          solution vous offre :
        </p>
        <ul className={styles.simplicitMaximaleUnSeul}>
          <li className={styles.simplicitMaximaleUnSeul1}>
            <span>
              Simplicité maximale : Un seul endroit pour présenter
              votre entreprise, vos services et vos produits de
              manière claire et concise.
            </span>
          </li>
          <li className={styles.impactVisuelDesignModerne}>
            <span>
              Impact visuel : Design moderne et élégant qui attire
              l'attention instantanément.
            </span>
          </li>
          <li className={styles.navigationIntuitiveParcour}>
            <span>
              Navigation intuitive : Parcourez facilement les
              informations essentielles sans jamais perdre vos
              visiteurs.
            </span>
          </li>
          <li className={styles.ractivitMobileAssurezUn}>
            <span>
              Réactivité mobile : Assurez une expérience utilisateur
              fluide sur tous les appareils, du bureau au smartphone.
            </span>
          </li>
          <li className={styles.rapiditDeMiseEnLigneD}>
            <span>
              Rapidité de mise en ligne : Démarrez rapidement avec
              notre processus de création simplifié.
            </span>
          </li>
          <li className={styles.blankLine2}>
            <span>&nbsp;</span>
          </li>
        </ul>
        <p className={styles.pourquoiChoisirNotre}>
          Pourquoi choisir notre site en une page ? Parce que votre
          présence en ligne mérite d'être à la fois professionnelle et
          efficace, sans complications inutiles.
        </p>
        <p className={styles.blankLine3}>&nbsp;</p>
        <p className={styles.dcouvrezCommentNotre}>
          Découvrez comment notre site en une page peut transformer
          votre présence en ligne aujourd'hui. Visitez [URL de votre
          site] pour commencer.
        </p>
        <img
          className={styles.productImage}
          loading="lazy"
          alt=""
          src="/site-une-page-image.png"
        />
      </span>
    </div>
  );

  return (
    <div className={styles.details}>
      <NavBar />
      <main className={styles.mainContent}>
        <section className={styles.contentWrapper}>
          {/* Section de contenu principal */}
          <div className={styles.heroParent}>
            <div className={styles.hero}>
              <div className={styles.heroContent}>
                <a className={styles.productName}>{productName.toUpperCase()}</a>
                <div className={styles.heroImage}>
                  <img
                    className={styles.imagePlaceholderIcon}
                    loading="lazy"
                    alt=""
                    src={`/images/${productName.toLowerCase().replace(/\s+/g, '-')}.png`}
                    // Ici, vous pouvez dynamiquement charger l'image en fonction du nom du produit
                  />
                </div>
              </div>
            </div>
            <div className={styles.productDetails}>
              <div className={styles.productInfo}>
                <div className={styles.prix200Wrapper}>
                  <div className={styles.prix200}>Prix : 200 €</div>
                </div>
                <button className={styles.bouton}>
                  <b className={styles.ajouterAuPanier}>Ajouter au panier</b>
                </button>
              </div>
            </div>
            {renderProductContent()}
            {/* Affichage du contenu spécifique du produit */}
            <div className={styles.relatedProducts}>
              <b className={styles.dcouvrezGalement}>Découvrez également...</b>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Details;
