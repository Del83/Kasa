import "./lodging.css";


function LodgTitle( { title } ) {
    return (
    
        <div className="lodgTitle-container">
            <h1 className="lodg-title">{title}</h1>
        </div>
    )
}

export default LodgTitle;