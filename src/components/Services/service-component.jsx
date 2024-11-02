import React from "react";
import { Eletricos, GrayPowerStation, Hidraulicos, SolidPartnerships } from "../../images"
import { motion } from "framer-motion";

export default function ServiceComponent() {

    const numOfCards = 3;

    const cardComponent = (image, alt, title) => {
        return (
            <motion.div
                whileHover={{ scale: 1.01 }}
                className="w-full h-52 md:w-96 md:h-80 shadow-2xl rounded-md flex justify-center items-center "
            >
                <img src={image} alt={alt} className="w-full h-full object-cover rounded-md" />
            </motion.div>
        )
    }

    const cardProps = [
        { image: Hidraulicos, alt: "Hidraulicos", title: "Hidráulicos", desc: 'Execução de projetos hidráulicos, manutenção, e serviços de reparo para garantir funcionalidade em prédios.' },
        { image: Eletricos, alt: "Eletricos", title: "Elétricos", desc: 'Instalações elétricas completas, manutenção e reparos para garantir eficiência e segurança nas obras.' },
        { image: SolidPartnerships, alt: "SolidPartnerships", title: "Parcerias Sólidas", desc: 'Atendemos construtoras renomadas, garantindo qualidade e comprometimento em cada projeto realizado com excelência.' }
    ]

    return (
        <>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0.2, 1] }} transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full h-full flex flex-col px-[20px] md:px-[80px] pb-10 bg-[#06132B] text-white font-montserrat"
            >
                <div className="w-full flex flex-col md:flex-row items-center pt-10">
                    {
                        numOfCards && cardProps.map((card, index) => {
                            return (
                                <div key={index} className="flex flex-col w-full px-2 pb-2 mb-auto justify-center items-center flex-1">
                                    {cardComponent(card.image, card.alt, card.title)}
                                    <h1 className="text-xl font-semibold pt-3 text-left">{card.title}</h1>
                                    <p className="w-full md:w-4/5 text-sm md:text-base text-balance text-center">{card.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>
        </>
    )
}