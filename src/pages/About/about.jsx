import Header from "../../compoments/Layout/header";
import Banner from "../../compoments/Layout/banner";
import AboutMain from "../../compoments/About/aboutMain"
import Footer from "../../compoments/Layout/footer";

function About() {
  return (
    <div className="about">
      <Header />
      <Banner />
      <AboutMain /> 
      <Footer />
    </div>
  );
}

export default About;