import "./lodging.css";
import LodgCarousel from "./lodgCarousel";
import LodgTitle from "./lodgTitle";
import LodgDropdown from "./lodgDropdown";
import Tags from "./lodgTags";
import Stars from "./lodgStars";

function LodgingMain( { id, title, location, description, equipments, tags, host, rating } ) {

    const equipementList = equipments.map((equipment) => <li>{equipment}</li> );

    return (
    <div className="lodging-main">

        <LodgCarousel />


        <LodgTitle 
            title={title}
            location={location} 
        />
        <section className="lodging-tags-stars">
            <Tags 
                tags={tags}
            />
            
            <Stars
                rating={rating}
            />
        </section>
        


        <section className="dropdown-lodg">
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