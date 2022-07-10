import { useLocation } from "react-router-dom";
import bannerHomeD from "../../assets/bannerHomeD.png";
import bannerHomeM from "../../assets/bannerHomeM.png";
import bannerAboutD from "../../assets/bannerAboutD.png";
import bannerAboutM from "../../assets/bannerAboutM.png";
import "./layout.css";


/**
 * React Component function : Banner 
 */
function Banner() {

  /* function qui renvoi un booléen selon le taille de l'écran */
  const screenWidth = () => window.screen.width <= 600;

  /* functions qui retournent selon la taille de l'écran l'image du banner */
  const homeBanner = () => {    
    return <img className="banner-image" src={ screenWidth() ? bannerHomeM : bannerHomeD } alt="Page d'accueil !" />;
  };

  const aboutBanner = () => {
    return <img className="banner-image" src={ screenWidth() ? bannerAboutM : bannerAboutD } alt="Page à propos !" />;
  };
 
  /* Constante qui renvoie l'adresse URL de la page en cours */
  const currentUrl = useLocation();

  return (
    <section>
      <div className="banner">
        {currentUrl.pathname.includes("/about") ? aboutBanner() : homeBanner()}
      </div>
    </section>
  );
}

export default Banner