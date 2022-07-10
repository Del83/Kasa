import "./lodging.css";

/**
 * React Component function : LodgHost
 * @param props Component props
 * @param props.title LodgeHost title
 * @param props.pictures LodgeHost picture
 */
function LodgHost( { name, picture } ) {
    return (
        <div className="lodgHost-container">
            <h2 className="lodgHost-name">{name}</h2>
            <img className="lodgHost-picture" src={picture} alt="propriétaire" />
        </div>
    )
}

export default LodgHost;