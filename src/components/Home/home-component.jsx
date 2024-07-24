import { motion } from "framer-motion"
import { Home } from "../../images"
import { Link, animateScroll as scroll } from "react-scroll"
import { Logo2 } from "../../images"

export default function HomeComponent() {
    return (
        <>
            <div className="w-full h-full flex flex-col items-center flex-grow gap-4 pt-10 mb-15 font-montserrat text-[#606060] overflow-hidden">                <div className="w-full h-full relative flex flex-col">
                <img src={Home} alt="Home" className="w-full h-[625px] object-cover blur-sm" />

                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#06082b] opacity-60" />

                <div className="w-full h-full absolute flex flex-col justify-center px-[10px] md:px-[40px]" style={{ top: '0', left: '0' }}> {/* Adjusted positioning */}
                    <div className="flex-grow flex flex-col justify-center items-start pl-[0px] md:pl-[40px] gap-1">
                        <img src={Logo2} alt="Logo" className="w-[350px] md:w-[400px]" />
                        <p className="w-full text-xl md:text-4xl font-bold text-white ">
                            <span className="flex md:hidden text-center mt-4">Especializados em instalações elétricas e hidráulicas para construtoras.</span>
                            <span className="hidden md:flex mt-2">Especializados em instalações elétricas <br /> e hidráulicas para construtoras.</span>
                        </p>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-evenly gap-[0px] md:gap-[40px] pb-4"> {/* Added padding-bottom for spacing */}
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="px-[16px] md:px-[60px] py-2.5 shadow-md bg-[#982727] text-white rounded-tl-3xl md:rounded-md mb-2"
                        >
                            <Link to="services" smooth={true} offset={-50} duration={500}>
                                Veja nossos serviços
                            </Link>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="px-[16px] md:px-[60px] py-2.5 shadow-md bg-[#982727] text-white rounded-br-3xl md:rounded-md mb-2"
                        >
                            <Link to="contact" smooth={true} offset={-50} duration={500}>
                                Entre em contato
                            </Link>
                        </motion.button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}