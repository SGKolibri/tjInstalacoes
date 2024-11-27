import React from "react";
import { Agree, Brazil, Clients, Graphic } from "../../images";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

export default function ServiceComponent() {
  const numOfCards = 3;

  const currentYear = new Date().getFullYear();

  const cardComponent = (image, alt, title) => {
    return (
      <motion.div className="w-full h-[300px] md:w-[319px] md:h-[365px] shadow-2xl rounded-md flex justify-center items-center">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover rounded-md"
        />
      </motion.div>
    );
  };

  const cardProps = [
    {
      image:
        "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730680169/image_346_ergm7z.png",
      alt: "Hidraulicos",
      title: "Hidráulicos",
      desc: "Execução de projetos hidráulicos, manutenção, e serviços de reparo para garantir funcionalidade em prédios.",
    },
    {
      image:
        "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730680169/image_346_1_vy5zyn.png",
      alt: "Eletricos",
      title: "Elétricos",
      desc: "Instalações elétricas completas, manutenção e reparos para garantir eficiência e segurança nas obras.",
    },
    {
      image:
        "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730680168/construction-works-frankfurt-downtown-germany_e83sai.png",
      alt: "SolidPartnerships",
      title: "Parcerias Sólidas",
      desc: "Atendemos construtoras renomadas, garantindo qualidade e comprometimento em cada projeto realizado.",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center tracking-wide">
        <h3 className="text-center tracking-wide text-3xl md:text-4xl font-semibold py-10">
          Serviços e Experiência
        </h3>
        <div className="w-full flex bg-[#040d1e] justify-center items-center text-[#fff]">
          <div className="w-4/5 md:w-full flex flex-col md:flex-row justify-between items-center gap-[60px] md:gap-[0px] py-16">
            {cardProps.map((card, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-full flex flex-col justify-center items-center gap-3"
                >
                  {cardComponent(card.image, card.alt, card.title)}
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <span className="text-justify font-normal text-lg md:text-md px-[0px] md:px-[40px] h-20">
                    {card.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex justify-center items-center py-[40px] md:py-[64px]">
          <div className="w-full md:w-4/5 flex flex-col  md:flex-row justify-around items-center gap-[20px] md:gap-[0px] px-[10px] md:px-[0px]">
            <div
              className="items-center text-center gap-3"
              style={{
                display: "flex",
                flexDirection: useMediaQuery("(min-width: 768px)")
                  ? "column"
                  : "row",
              }}
            >
              <div>
                <div className="w-32 h-32 flex justify-center items-center rounded-full bg-[#040d1e]">
                  <img src={Clients} alt="clients" className="w-3/5 h-3/5" />
                </div>
              </div>
              <span className="text-lg md:text-xl">
                Mais de 15 clientes satisfeitos.
              </span>
            </div>
            <div
              className="items-center text-center gap-3"
              style={{
                display: "flex",
                flexDirection: useMediaQuery("(min-width: 768px)")
                  ? "column"
                  : "row-reverse",
              }}
            >
              <div>
                <div className="w-32 h-32 flex justify-center items-center rounded-full bg-[#040d1e]">
                  <img src={Brazil} alt="clients" className="w-3/5 h-3/5" />
                </div>
              </div>
              <span className="text-lg md:text-xl">
                Projetos realizados em 4 estados.
              </span>
            </div>

            <div
              className="items-center text-center gap-3"
              style={{
                display: "flex",
                flexDirection: useMediaQuery("(min-width: 768px)")
                  ? "column"
                  : "row",
              }}
            >
              <div>
                <div className="w-32 h-32 flex justify-center items-center rounded-full bg-[#040d1e]">
                  <img src={Agree} alt="agreement" className="w-3/5 h-3/5" />
                </div>
              </div>
              <span className="text-lg md:text-xl">
                Parcerias sólidas com 3 construtoras.
              </span>
            </div>
            <div
              className="items-center text-center gap-3"
              style={{
                display: "flex",
                flexDirection: useMediaQuery("(min-width: 768px)")
                  ? "column"
                  : "row-reverse",
              }}
            >
              <div>
                <div className="w-32 h-32 flex justify-center items-center rounded-full bg-[#040d1e]">
                  <img src={Graphic} alt="graphic" className="w-3/5 h-3/5" />
                </div>
              </div>
              <span className="text-lg md:text-xl">
                Mais de {currentYear - 2010} anos no mercado.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
