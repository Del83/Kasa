import { useState } from "react";
import chevronDown from "../../assets/chevronDown.png";
import chevronUp from "../../assets/chevronUp.png";
import "./dropdown.css";

function Dropdown({ title, contents }) {

    const [unfolded, setUnfolded] = useState(false);
    const chevron = unfolded ? chevronDown : chevronUp;

    const handleFolded = () => { setUnfolded(!unfolded)};

    const content = () => { return <p className="dropdown-content">{contents}</p> };
      
      return (
        <div className="dropdown">
          <div className="dropdown-container" onClick={handleFolded}>
            <p className="dropdown-title">{title}</p>
            <img className="chevron" src={chevron} alt="chevron menu déroulant" />
          </div>
          {unfolded && content()}
        </div>
      );

}

export default Dropdown