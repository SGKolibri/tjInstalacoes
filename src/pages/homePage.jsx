import { Link } from "react-router-dom";
import Footer from "../components/Footer/footer-component";
import NavbarComponent from "../components/Navbar/navbar-component";
import HomeComponent from "../components/Home/home-component";
import ServiceComponent from "../components/Services/service-component";
import MapComponent from "../components/Map/map-component";
import AboutComponent from "../components/About/about-component";

export default function HomePage() {

    return (
        <>
            <div className="flex flex-col min-h-screen bg-[#f2f2f2]">
                <NavbarComponent />
                <div id="home"  >
                    <HomeComponent />
                </div>
                {/* <div id='about'>
                    <AboutComponent />
                </div>
                <div id="services">
                    <ServiceComponent />
                </div> */}
                <div id="location">
                    <MapComponent />
                </div>
                <div id="contact">
                    <Footer />
                </div>
            </div>
        </>
    )
}