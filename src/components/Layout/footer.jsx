
import logoblanc from "../../assets/logoBlanc.png";
import "./layout.css";

/**
 * React Component function : Footer 
 */
function Footer() {
  return (
    <footer className="footer">
      <img src={logoblanc} className="footer-logoblanc" alt="logo" />
      <div className="footer-copyright" >© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;