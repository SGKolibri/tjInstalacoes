import React from "react";
import { motion } from "framer-motion"
import { Home, Wide } from "../../images"
import { Link, animateScroll as scroll } from "react-scroll"
import { Logo2 } from "../../images"

export default function HomeComponent() {

    return (
        <>
            <div className="w-full h-full flex flex-col items-center flex-grow gap-4 pt-10 mb-15 font-montserrat text-[#606060] overflow-hidden">                <div className="w-full h-full relative flex flex-col">
                <div className="w-full h-full relative flex flex-col">
                    <img
                        src={Wide}
                        alt="Home"
                        className="w-full h-[625px] object-cover blur-sm"
                    />
                    <img
                        src="https://tj-instalacoes.s3.amazonaws.com/images/wide_animation.gif"
                        alt="Home"
                        className="w-full h-[625px] object-cover absolute blur-sm top-0 left-0 right-0 bottom-0"
                    />
                </div>

                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#06082b] opacity-60" />

                <div className="w-full h-full absolute flex flex-col justify-center px-[10px] md:px-[40px]" style={{ top: '0', left: '0' }}> {/* Adjusted positioning */}
                    <div className="flex-grow flex flex-col justify-center items-start pl-[0px] md:pl-[40px] gap-1">
                        <img src={Logo2} alt="Logo" className="w-[350px] md:w-[400px]" />
                        <p className="w-full text-xl md:text-4xl font-bold text-white ">
                            <span className="flex md:hidden text-center mt-4">Especialista na execução de projetos elétricos e hidráulicos</span>
                            <span className="hidden md:flex mt-2">Especialista na execução de projetos<br /> elétricos e hidráulicos</span>
                        </p>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-evenly gap-[0px] md:gap-[40px] pb-4"> {/* Added padding-bottom for spacing */}
                        <Link to="services" smooth={true} offset={-50} duration={500}>
                            <motion.button
                                whileTap={{ scale: 0.96 }}
                                className="w-full px-[16px] md:px-[60px] py-2.5 shadow-md bg-[#982727] text-white rounded-tl-3xl md:rounded-md mb-2"
                            >
                                Veja nossos serviços
                            </motion.button>
                        </Link>
                        <Link to="contact" smooth={true} offset={-50} duration={500}>
                            <motion.button
                                whileTap={{ scale: 0.96 }}
                                className="w-full px-[16px] md:px-[60px] py-2.5 shadow-md bg-[#982727] text-white rounded-br-3xl md:rounded-md mb-2"
                            >
                                Entre em contato
                            </motion.button>
                        </Link>
                    </div>
                </div>
                {/* </div> */}
            </div>
            </div >
        </>
    )
}