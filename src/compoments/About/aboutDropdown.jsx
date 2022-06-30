import { useState } from "react";
import chevronDown from "../../assets/chevronDown.png";
import chevronUp from "../../assets/chevronUp.png";
import "./aboutMain.css";

function AboutDropdown({ title, contents }) {

    const [unfolded, setUnfolded] = useState(false);
    const chevron = unfolded ? chevronDown : chevronUp;

    const handleFolded = () => { setUnfolded(!unfolded)};

    const content = () => { return <p className="about-dropdown-content">{contents}</p> };
      
      return (
        <div>
          <div className="about-dropdown-container" onClick={handleFolded}>
            <p className="about-dropdown-title">{title}</p>
            <img className="chevron" src={chevron} alt="chevron menu déroulant" />
          </div>
          {unfolded && content()}
        </div>
      );

}

export default AboutDropdown;