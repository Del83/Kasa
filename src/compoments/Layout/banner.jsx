import { useLocation } from "react-router-dom";
import bannerHomeD from "../../assets/bannerHomeD.png";
import bannerAboutD from "../../assets/bannerAboutD.png";
import "./layout.css";

function Banner() {
  const homeBanner = () => {
    return <img className="banner-image" src={bannerHomeD} alt="Page d'accueil !" />;
  };

  const aboutBanner = () => {
    return <img className="banner-image" src={bannerAboutD} alt="Page à propos !" />;
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