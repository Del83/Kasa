import { useLocation } from "react-router-dom";
import bannerHomeD from "../../assets/bannerHomeD.png";
import bannerHomeM from "../../assets/bannerHomeM.png";
import bannerAboutD from "../../assets/bannerAboutD.png";
import bannerAboutM from "../../assets/bannerAboutM.png";
import "./layout.css";

function Banner() {
  const screenWidth = window.screen.width;

  const homeBanner = () => {    
    return <img className="banner-image" src={ (screenWidth == 425) ? bannerHomeM : bannerHomeD } alt="Page d'accueil !" />;
  };

  const aboutBanner = () => {
    return <img className="banner-image" src={ (screenWidth == 425) ? bannerAboutM : bannerAboutD } alt="Page à propos !" />;
  };
 
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