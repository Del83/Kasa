import Header from "../../components/Layout/header";
import Banner from "../../components/Layout/banner";
import Thumbnail from "../../components/Thumbnail/thumbnail";
import Footer from "../../components/Layout/footer";
import logements from "../../data/datas.json";
import "./home.css";

/**
 * React Component function : Home page
 */
function Home() {
  return (
    <div className="home">
        <Header />
        <Banner /> 
        <div className="thumbnail">
            {logements.map(({ id, cover, title, index}) => (

              <Thumbnail 
                key={`${title}-${index}`}
                id={id}  
                cover={cover}
                title={title}
              />
              
            ))}
        </div>
        <Footer />
    </div>
  );
}

export default Home;
