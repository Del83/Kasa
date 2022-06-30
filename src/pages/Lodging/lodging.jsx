import Header from "../../compoments/Layout/header";
import LodgingMain from "../../compoments/LodgingMain/lodgingMain";
import Footer from "../../compoments/Layout/footer";
import { useLocation } from 'react-router-dom'
import logements from "../../datas/datas.json";

function Lodging() {
    //const { id } = useParams()
    const currentUrl = useLocation();
    const currentIdLodging = [...logements].filter((data) => data.id === currentUrl.pathname.split("/lodging/")[1])[0];
    console.log(currentIdLodging.title);
    
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
        tags={currentIdLodging.tags}
        host={currentIdLodging.host}
        rating={currentIdLodging.rating}
        />
        <Footer />
    </div>
    )
}

export default Lodging;