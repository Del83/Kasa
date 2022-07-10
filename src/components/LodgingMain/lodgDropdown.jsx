import { useState } from "react";
import chevronDown from "../../assets/chevronDown.png";
import chevronUp from "../../assets/chevronUp.png";
import "./lodging.css";

/**
 * React Component function : LodgeDropdown
 * @param props Component props
 * @param props.title Lodgedropdown title
 * @param props.contents Lodgedropdown contents
 */
function LodgDropdown({ title, contents }) {

    const [unfolded, setUnfolded] = useState(false);
    const chevron = unfolded ? chevronDown : chevronUp;
    const handleFolded = () => { setUnfolded(!unfolded)};
    const content = () => { return <p className="lodg-dropdown-content">{contents}</p> };
      
      return (
        <div className="lodg-dropdown">
          <div className="lodg-dropdown-container" onClick={handleFolded}>
            <p className="lodg-dropdown-title">{title}</p>
            <img className="chevron" src={chevron} alt="chevron menu déroulant" />
          </div>
          {unfolded && content()}
        </div>
      );

}

export default LodgDropdown;