import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Fait défiler la page vers le haut à chaque changement d'URL
  }, [pathname]);

  return null; // Ce composant ne rend rien visuellement
};

export default ScrollToTop;
