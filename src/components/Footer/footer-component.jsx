import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TJFooter } from "../../images";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import { Fab } from "@mui/material";

export default function Footer() {

    const whatsappLink = 'https://wa.me/5562981359325'

    return (
        <footer className="bg-[#fbfbfb] pt-2">
            <div className="w-full h-full flex justify-between items-center font-medium font-montserrat text-[#303030] pb-2">
                {/* Violet1 */}
                <div className="w-[22%] h-full flex">
                    <img src={TJFooter} alt="TJ Instalações" className="h-[185px]" />
                </div>
                {/* Blueish Violet */}
                <div className="w-full h-full flex flex-col justify-center">
                    {/* Top */}
                    <div className="w-full h-full flex text-sm justify-between">
                        <div className="w-fit flex flex-col text-center justify-around items-center">
                            <span>Av. Rio Verde - Vila São Tomaz</span>
                            <span>74915-515 Aparecida de Goiânia - GO</span>
                            <span>Prédio Comercial E-Business Rio Verde - 15° Andar Sala 1506</span>
                        </div>
                        <div className="w-fit flex flex-col gap-2 justify-around text-sm">
                            <span className="flex gap-2 items-center">
                                <IoMdCall className="text-3xl" />
                                (62) 9 98135-9325
                            </span>
                            <span className="flex gap-2 items-center">
                                <IoMdMail className="text-3xl" />
                                grupotjinstalacoes@gmail.com
                            </span>
                            <span>
                                Atendimento das 08h as 18h, de Segunda a Sexta
                            </span>
                        </div>
                        <div className="w-fit flex flex-col text-center justify-around">
                            <div>
                                <Link to="/services" className="text-[#303030] no-underline">
                                    <span>Serviços</span>
                                </Link>
                            </div>
                            <div>
                                <Link to="/work" className="text-[#303030] no-underline">
                                    <span>Trabalhe Conosco</span>
                                </Link>
                            </div>
                            <div>
                                <Link to="/partnerships" className="text-[#303030] no-underline">
                                    <span>Seja nosso parceiro</span>
                                </Link>
                            </div>
                            <div>
                                <Link to="/faq" className="text-[#303030] no-underline">
                                    <span>FAQ</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Bottom */}
                    <div className="w-full h-full flex text-sm justify-center items-center pt-14">
                        <span className="text-base">
                            © Todos os direitos reservados a TJ Instalações - 2024
                        </span>
                    </div>
                </div>
                {/* Violet2 */}
                <div className="w-[20%] h-full flex flex-col justify-center items-center gap-2">
                    <span>
                        Nossas redes
                    </span>
                    <div className="w-full flex gap-3 justify-center items-center">
                        <AiFillInstagram className="text-2xl" />
                        <IoLogoWhatsapp className="text-2xl" />
                        <IoLogoLinkedin className="text-2xl" />
                    </div>
                </div>
            </div>
            <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="fixed bottom-4 right-4 md:bottom-4 md:right-4 z-50 sm:right-2 sm:bottom-2"
                    onClick={() => window.open(whatsappLink, '_blank')}
                >
                <motion.button className="flex bg-whatsapp rounded-full shadow-md">
                    <IoLogoWhatsapp className="text-5xl text-white p-2 m-2" />
                </motion.button>
                {/* <Fab
                    size="large"
                    sx={{
                        width: '60px', // Custom width
                        height: '60px', // Custom height
                        '& svg': {
                            fontSize: '3rem', // Adjust icon size
                        },
                    }}
                    // sx={fabGreenStyle}
                    className="bg-[#f2f2f2]"
                >
                    <IoLogoWhatsapp className="text-3xl text-green-500" />
                </Fab> */}
            </motion.div>
        </footer>
    )
}