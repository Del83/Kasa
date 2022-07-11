import { useLocation } from 'react-router-dom'
import Header from "../../components/Layout/header";
import LodgingMain from "../../components/LodgingMain/lodgingMain";
import Footer from "../../components/Layout/footer";
import logements from "../../data/datas.json";


/**
 * React Component function : Lodging page
 */
function Lodging() {
    const currentUrl = useLocation();
    const currentIdLodging = [...logements].filter((data) => data.id === currentUrl.pathname.split("/lodging/")[1])[0];

    return (
        <div className="lodging">
            <Header />
            <LodgingMain 
                key={`${currentIdLodging.title}-${currentIdLodging.id}`}
                id={currentIdLodging.id}
                title={currentIdLodging.title}
                location={currentIdLodging.location} 
                description={currentIdLodging.description}
                equipments={currentIdLodging.equipments}
                pictures={currentIdLodging.pictures}
                tags={currentIdLodging.tags}
                host={currentIdLodging.host}
                rating={currentIdLodging.rating}
            />
            <Footer />
        </div>
    )
}

export default Lodging;