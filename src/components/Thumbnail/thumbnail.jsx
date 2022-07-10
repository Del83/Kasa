import { Link } from 'react-router-dom'
import "./thumbnail.css";

/**
 * React Component function : Thumbnail
 * @param props Component props
 * @param props.id thumbnail id;
 * @param props.title thumbnail title;
 *  @param props.cover thumbnail cover;
 */
function Thumbnail({ id, title, cover }) {
    return (
            <div className="thumbnail-card">
                <Link to={`/lodging/${id}`}>
                    <img src={cover} alt={title} className="thumbnail-picture"/>
                    <div className="thumbnail-filtre">
                        <div className="thumbnail-title">{title}</div>     
                    </div>
               </Link> 
            </div>
        )
}

export default Thumbnail


