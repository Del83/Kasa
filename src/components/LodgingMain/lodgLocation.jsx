import "./lodging.css";

/**
 * React Component function : LodgLocation
 * @param props Component props
 * @param props.location LodgLocation location
 */
function LodgLocation( { location } ) {
    return (
        <div className="lodgLocation-container">
            <h3 className="lodg-location">{location}</h3>
        </div>
    )
}

export default LodgLocation;