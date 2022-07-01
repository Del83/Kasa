import "./lodging.css";


function LodgLocation( { location } ) {
    return (
    
        <div className="lodgLocation-container">
            <h3 className="lodg-location">{location}</h3>
        </div>
    )
}

export default LodgLocation;