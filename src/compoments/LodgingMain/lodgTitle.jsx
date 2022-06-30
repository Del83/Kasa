import "./lodging.css";


function LodgTitle( { title, location } ) {
    return (
    
        <div className="lodgTitle-container">
            <h1 className="lodgTitle-title">{title}</h1>
            <h2 className="lodgTitle-location">{location}</h2>
        </div>
    )
}

export default LodgTitle;