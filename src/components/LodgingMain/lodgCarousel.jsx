import { useState } from "react";
import chevronPrev from "../../assets/chevronPrev.png";
import chevronNext from "../../assets/chevronNext.png";
import "./lodging.css";

/**
 * React Component function : Carousel
 * @param props Component props
 * @param props.title Carousel title
 * @param props.pictures Carousel pictures
 */
function Carousel ({title, pictures} ) {

    const [index, setIndex] = useState(0);

    const Previous = () => {
        if (index === 0) {
            setIndex(pictures.length -1)
        } else {
            setIndex(index -1)
        }
    }

    const Next = () => {
        if (index === pictures.length -1) {
            setIndex(0)
        } else {
            setIndex(index +1)
        }
    }

    return (
        <div className="carousel">
            <img onClick={Previous} className={pictures.length > 1 ? "chevronPrev" : "chevronNone"} src={chevronPrev} alt="précédent" />
            <img className="lodg-photo" src={pictures[index]} alt={title}/> 
            <img onClick={Next} className={pictures.length > 1 ? "chevronNext" : "chevronNone"} src={chevronNext} alt="suivant" />
        </div>

    )
}

export default Carousel;