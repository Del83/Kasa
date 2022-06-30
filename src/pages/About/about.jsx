import Header from "../../compoments/Layout/header";
import Banner from "../../compoments/Layout/banner";
import AboutMain from "../../compoments/About/aboutMain"
import Footer from "../../compoments/Layout/footer";
import "./about.css";

function About() {
  return (
    <div className="about">
    <Header />
    <Banner />
    <AboutMain /> 
        <div className="about-container">
            
        </div>
    
    <Footer />
    </div>
  );
}

export default About;