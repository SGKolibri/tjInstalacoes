import { Link } from "react-router-dom";
import Footer from "../components/Footer/footer-component";
import Navbar from "../components/Navbar/navbar-component";
import HomeComponent from "../components/Home/home-component";
import ServiceComponent from "../components/Services/service-component";
import MapComponent from "../components/Map/map-component";

export default function HomePage() {

    return (
        <>
            <div className="flex flex-col justify-between min-h-screen pb-20 bg-[#EEEEEE]">
                <Navbar />
                <div id="home"  >
                    <HomeComponent />
                </div>
                <div id="services">
                    <ServiceComponent />
                </div>
                <div id="about">
                    <MapComponent />
                </div>
                <Footer />
            </div>
        </>
    )
}