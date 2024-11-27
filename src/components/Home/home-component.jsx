import React from "react";
import { motion } from "framer-motion";
import { HomeBG, Wide } from "../../images";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import { Logo1 } from "../../images";
import NavbarComponent from "../Navbar/navbar-component";

export default function HomeComponent() {
  const HomeImg =
    "https://tj-instalacoes.s3.us-east-1.amazonaws.com/images/wide_animation.gif";

  return (
    <>
      <NavbarComponent />
      <div className="w-full h-full flex flex-col items-center flex-grow gap-4 pt-16 font-montserrat overflow-hidden">
        <div className="w-full h-full relative flex flex-col">
          <div
            className="w-full h-[625px] flex flex-col bg-cover bg-center"
            style={{
              backgroundImage: `url(${HomeImg})`,
            }}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#030416] opacity-60" />
          </div>
        </div>

        <div
          className="w-full h-full absolute flex flex-col justify-center px-[10px] md:px-[40px]"
          style={{ top: "0", left: "0" }}
        >
          <div className="flex-grow flex flex-col justify-center items-start pl-[0px] md:pl-[40px] gap-1">
            <img src={Logo1} alt="Logo" className="w-1/2 md:w-[18%]" />
            <p className="w-full flex mt-2 text-xl md:text-[22px] font-bold text-white ">
              Especialista na execução de projetos elétricos e hidráulicos.
            </p>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <motion.button
                className="px-6 py-2 ml-2 rounded-md bg-[#A20003] text-white"
                whileHover={{ backgroundColor: "#720002" }}
                transition={{ duration: 0.2 }}
              >
                Entre em contato
              </motion.button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </>
  );
}
