import { useState } from "react";
import chevronDown from "../../assets/chevronDown.png";
import chevronUp from "../../assets/chevronUp.png";
import "./aboutMain.css";

/**
 * React Component function : AboutDropdown
 * @param props Component props
 * @param props.title Dropdown title
 * @param props.contents Dropdown contents
 */
function AboutDropdown({ title, contents }) {

    /* useSate : liste déplié = false */
    const [unfolded, setUnfolded] = useState(false);
    const chevron = unfolded ? chevronDown : chevronUp;

    /* function qui change le statut - sera utilisé au clic sur le Dropdown */
    const handleFolded = () => { setUnfolded(!unfolded)};

    /* function qui retourne le contenu */
    const content = () => { return <p className="about-dropdown-content">{contents}</p> };
      
      return (
        <div>

          <div className="about-dropdown-container" onClick={handleFolded}>
            <p className="about-dropdown-title">{title}</p>
            <img className="chevron" src={chevron} alt="chevron menu déroulant" />
          </div>
          
          {/* Condition si liste déplié(true) - affiche le contenu */}
          {unfolded && content()}
        </div>
      );

}

export default AboutDropdown;