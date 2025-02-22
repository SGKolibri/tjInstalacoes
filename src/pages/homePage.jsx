import Footer from "../components/Footer/footer-component";
import NavbarComponent from "../components/Navbar/navbar-component";
import HomeComponent from "../components/Home/home-component";
import ServiceComponent from "../components/Services/service-component";
import MapComponent from "../components/Map/map-component";
import AboutComponent from "../components/About/about-component";
import "./style.css";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col bg-[#fbfbfb] font-montserrat">
        <HomeComponent />
        <AboutComponent />
        <ServiceComponent />
        <MapComponent />
        <div id="contact">
          <Footer />
        </div>
      </div>
    </>
  );
}
