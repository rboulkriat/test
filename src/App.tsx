import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Decouvrir from "./pages/decouvrir"; // Assurez-vous que le chemin et le nom du fichier sont corrects

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Accueil";
        metaDescription = "Bienvenue sur notre site.";
        break;
      case "/Decouvrir":
        title = "Découvrir";
        metaDescription = "Découvrez nos services.";
        break;
      // Ajoutez d'autres cas si nécessaire
      default:
        title = "Mon site";
        metaDescription = "Description de mon site.";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/Decouvrir" element={<Decouvrir />} /> {/* Ajout de la route Decouvrir */}
    </Routes>
  );
}

export default App;
