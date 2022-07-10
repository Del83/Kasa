import "./lodging.css";

/**
 * React Component function : LodgTitle
 * @param props Component props
 * @param props.title LodgTitle title
 */
function LodgTitle( { title } ) {
    return (
        <div className="lodgTitle-container">
            <h1 className="lodg-title">{title}</h1>
        </div>
    )
}

export default LodgTitle;