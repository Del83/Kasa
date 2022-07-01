import "./lodging.css";
import LodgCarousel from "./lodgCarousel";
import LodgTitle from "./lodgTitle";
import LodgLocation from "./lodgLocation";
import LodgDropdown from "./lodgDropdown";
import LodgHost from "./lodgHost";
import Tags from "./lodgTags";
import Stars from "./lodgStars";

function LodgingMain( { id, title, pictures, location, description, equipments, tags, host, rating } ) {

    const equipementList = equipments.map((equipment) => <li>{equipment}</li> );

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