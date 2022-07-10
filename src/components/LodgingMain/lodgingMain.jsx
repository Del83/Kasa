import LodgCarousel from "./lodgCarousel";
import LodgTitle from "./lodgTitle";
import LodgLocation from "./lodgLocation";
import Tags from "./lodgTags";
import LodgHost from "./lodgHost";
import Stars from "./lodgStars";
import LodgDropdown from "./lodgDropdown";
import "./lodging.css";

/**
 * React Component function : LodgingMain
 * @param props Component props
 * @param props.id LodgingMain id
 * @param props.title LodgingMain title
 * @param props.pictures LodgingMain pictures
 * @param props.location LodgingMain location
 * @param props.description LodgingMain description
 * @param props.equipments LodgingMain equipments
 * @param props.tags LodgingMain tags
 * @param props.host LodgingMain host
 * @param props.rating LodgingMain rating
 */
function LodgingMain( { id, title, pictures, location, description, equipments, tags, host, rating } ) {

    /* function qui récupére la liste des équipements */
    const equipementList = equipments.map((equipment) => <li key={`${id}-${equipment}`}>{equipment}</li> );

    return (
    <div className="lodging-main">

        <LodgCarousel 
            title={title}
            pictures={pictures}
        />

        <section className="lodging-section">
            <section className="lodging-section-left">
                <LodgTitle 
                    title={title}
                /> 
                <LodgLocation 
                    location={location} 
                />
                <Tags 
                    tags={tags}
                />
            </section>

            <section className="lodging-section-right">
                <LodgHost 
                    name={host.name}
                    picture={host.picture}
                />
                <Stars
                    rating={rating}
                />
            </section>
        </section>
        
        <section className="lodging-dropdown">
            <LodgDropdown
                title="Description"
                contents= {description}
                />
            <LodgDropdown
                title="Equipements"
                contents={equipementList}
                />
        </section>

    </div>
    )
}

export default LodgingMain