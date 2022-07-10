import starFull from "../../assets/starFull.png";
import starEmpty from "../../assets/starEmpty.png";
import "./lodging.css";

/**
 * React Component function : Stars
 * @param props Component props
 * @param props.rating Stars rating
 */
function Stars({ rating }) {
    const stars = [1, 2, 3, 4, 5];
    const currentRating = rating;

    return (
      <div className="stars">
        {stars.map((star) => (
        <img className="stars" key={star} src={star <= currentRating ? starFull : starEmpty }  alt="étoiles" />
      ))}
      </div>
    );
  }
  
  export default Stars;