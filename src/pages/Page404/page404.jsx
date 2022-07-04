import { Link } from "react-router-dom";
import Header from "../../compoments/Layout/header";
import "./page404.css";

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



