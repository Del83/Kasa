import "./thumbnail.css";

function Thumbnail({ title, cover }) {
    return (
        <div className="thumbnail-card">
            <img src={cover} alt={title} className="thumbnail-picture"/>
            <div className="thumbnail-filtre">
                 <div className="thumbnail-title">{title}</div>     
            </div>
        </div>
        )
}

export default Thumbnail


