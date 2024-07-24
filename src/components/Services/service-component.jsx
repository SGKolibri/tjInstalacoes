import React from "react";
import { Eletricos, Hidraulicos, TwentyFour } from "../../images"
import { motion } from "framer-motion";

export default function ServiceComponent() {

    const numOfCards = 3;

    const cardComponent = (image, alt, title) => {
        return (
            <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative">
                <img src={image} alt={alt} className="w-[326px] h-[362px] rounded-md" />
                <div className="absolute flex inset-0 bg-[#06082B] rounded-t-md items-center justify-center h-14 opacity-85">
                    <p className="text-xl">
                        {title}
                    </p>
                </div>
            </motion.div>
        )
    }

    const cardProps = [
        { image: Hidraulicos, alt: "Hidraulicos", title: "Hidráulicos" },
        { image: Eletricos, alt: "Eletricos", title: "Elétricos" },
        { image: TwentyFour, alt: "TwentyFour", title: "Atendimento geral" }
    ]

    return (
        <>
            <motion.div whileInView={{ x: [-100, 0], opacity: [0.2, 1] }} transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full h-[435px] flex flex-col px-24 mb-40 bg-[#06082B] text-white"
            >
                <h1 className=" pt-12">
                    Nossos Serviços
                    <div className="w-4/5 h-[1px] mt-4 mb-6 bg-white" />
                </h1>
                <div className="w-full flex items-center mt-auto justify-around">
                    {
                        numOfCards && cardProps.map((card, index) => {
                            return (
                                <div key={index} className="flex flex-col shadow-md rounded-md items-center gap-4">
                                    {cardComponent(card.image, card.alt, card.title)}
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>
        </>
    )
}