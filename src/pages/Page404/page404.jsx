import { Link } from "react-router-dom";
import Header from "../../components/Layout/header";
import "./page404.css";


/**
 * React Component function : Error 404 page not found
 */
function Error() {
  return (
    <div className="error">
      <Header />
        <div className="error-container">
          <span className="four-o-four">404</span>
          <span className="four-o-four-details"> Oups! La page que vous demandez n'existe pas.</span>
          <Link to="/home"
            className="back-to-home">
            <span>Retourner sur la page d'accueil</span>
          </Link>
        </div>
    </div>
  );
}

export default Error;



