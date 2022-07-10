import Header from "../../components/Layout/header";
import Banner from "../../components/Layout/banner";
import AboutMain from "../../components/About/aboutMain"
import Footer from "../../components/Layout/footer";

/**
 * React Component function : About page
 */
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