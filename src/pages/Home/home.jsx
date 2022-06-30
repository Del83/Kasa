import Header from "../../compoments/Layout/header";
import Banner from "../../compoments/Layout/banner";
import Thumbnail from "../../compoments/Thumbnail/thumbnail";
import Footer from "../../compoments/Layout/footer";
import "./home.css";
import logements from "../../datas/datas.json";


function Home() {
  return (
    <div className="home">
      <Header />
      <Banner /> 
    <div className="thumbnail">
      {logements.map(({ cover, title, index}) => (
        <Thumbnail 
        key={`${title}-${index}`}  
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
