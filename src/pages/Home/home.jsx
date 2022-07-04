import Header from "../../compoments/Layout/header";
import Banner from "../../compoments/Layout/banner";
import Thumbnail from "../../compoments/Thumbnail/thumbnail";
import Footer from "../../compoments/Layout/footer";
import logements from "../../datas/datas.json";
import "./home.css";

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
