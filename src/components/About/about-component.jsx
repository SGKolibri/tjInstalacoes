import React from "react";
import { useMediaQuery } from "@mui/material";
import { Office, Soulbiz } from "../../images";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const slider01Images = [
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1731357724/sbh01_zwt6ww.png",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1731357725/sbh02_n5zdtl.png",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1731357726/sbh03_smheyj.png",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1731357725/sbh04_ig5c5s.png",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1731357726/sbh05_gtoixs.png",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1731357727/sbh06_g5lzbb.png",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1731357724/sbh07_bl1okc.png",
  },
];

const slider02Images = [
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730491217/images/r7vmig3aylb0d1kfopqm.png",
    title: "Opus Penthouse",
    description: "Goiânia - GO",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730491218/images/e5ffe7cxqgsuxxzgei7x.png",
    title: "Zayn Home",
    description: "Goiânia - GO",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730491218/images/zvy5w6rudvj6thfeoyh4.png",
    title: "Acqua Design",
    description: "Palmas - TO",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730491218/images/jpmvjs5y1zfcqjik42gl.png",
    title: "Casa Raruz",
    description: "Rio Verde - GO",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730491218/images/gr0g4s8tj3mlcjijhkpf.png",
    title: "Zoe Habitat",
    description: "Rio Verde - GO",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730491219/images/wnheelndnxbpruoxoldr.png",
    title: "Nature",
    description: "Brasília - DF",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730582304/other07_hvuagw.png",
    title: "Vivare",
    description: "Rio Verde - GO",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730582298/other08_qoshj0.png",
    title: "Lux Oeste",
    description: "Goiânia - GO",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730582283/other09_uezxgd.png",
    title: "Laguna",
    description: "Rio Verde - GO",
  },
];

export default function AboutComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const slider1 = React.useRef(null);
  const slider2 = React.useRef(null);

  const settings = {
    speed: 450,
    slidesToShow: isMobile ? 1 : 3,
    arrows: false,
  };

  return (
    <>
      <div className="w-full text-center flex flex-col justify-between items-center gap-3 md:gap-0 font-montserrat text-[#303030] pb-10">
        <div className="w-full flex flex-col md:flex-row justify-center items-center pt-[60px] md:pt-[112px] gap-[24px] md:gap-[0px]">
          <div className="w-full flex justify-center items-center">
            <img
              src={Office}
              alt="Escritorio"
              className="w-[275px] md:w-[530px] h-[275px] md:h-[406px] object-cover"
            />
          </div>
          <div className="w-full h-full flex justify-center items-center px-[40px] md:px-[80px]">
            <span className="text-xl md:text-2xl text-justify">
              Combinando expertise e inovação oferecemos soluções elétricas e
              hidráulicas que atendem suas necessidades e superam suas
              expectativas. Cada projeto é executado com atenção aos detalhes e
              compromisso com a qualidade.
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row-reverse justify-center items-center py-[60px] md:py-[100px] gap-[24px] md:gap-[0px]">
          <div className="w-full flex justify-center items-center">
            <img
              src={Soulbiz}
              alt="Escritorio"
              className="w-[275px] md:w-[530px] h-[275px] md:h-[406px] object-cover"
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center px-[40px] md:px-[80px]">
            <h1 className="text-2xl md:text-3xl font-semibold pb-2">
              Soul Business
            </h1>
            <span className="text-xl md:text-2xl text-justify">
              O Soul Business é um edifício inovador que une design moderno e
              infraestrutura de ponta. A TJ cuida dos serviços elétricos e
              hidráulicos, garantindo eficiência e segurança. Nosso compromisso
              é oferecer soluções de alta qualidade, atendendo aos mais altos
              padrões. Estamos entusiasmados em contribuir para este projeto de
              destaque no setor.
            </span>
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center pb-10">
          <div className="w-full h-full flex items-center justify-center">
            <button onClick={() => slider1?.current?.slickPrev()}>
              <MdNavigateBefore size={40} />
            </button>
            <div className="w-[80%] h-full">
              <Slider ref={slider1} slidesToScroll={1} {...settings}>
                {slider01Images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center"
                    >
                      <div className="flex justify-center items-center w-full">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="max-w-full h-auto"
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <button onClick={() => slider1?.current?.slickNext()}>
              <MdNavigateNext size={40} />
            </button>
          </div>
          {/* <div className="w-[80%] flex items-end place-content-center md:place-content-end pr-[0px] md:pr-[12px]">
            <Link
              className="text-md text-black underline flex items-end"
              to={"/home/last-project"}
            >
              Veja mais &nbsp; <IoIosArrowRoundForward size={20} />
            </Link>
          </div> */}
        </div>

        <div className="w-full flex flex-col items-center overflow-hidden gap-5">
          <h3 className="tracking-wide text-3xl md:text-4xl font-semibold">
            Outros Projetos
          </h3>
          <div className="w-full h-full flex items-center justify-center pb-4">
            <button onClick={() => slider2?.current?.slickPrev()}>
              <MdNavigateBefore size={40} />
            </button>
            <div className="w-[80%] h-full">
              <Slider
                ref={slider2}
                slidesToScroll={isMobile ? 1 : 3}
                dots={true}
                {...settings}
              >
                {slider02Images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center bg-white border-[1.5px] border-black px-[24xpx] md:px-[30px] pt-[0px] md:pt-[28px]"
                    >
                      <div className="flex justify-center items-center w-full">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="max-w-full h-auto"
                        />
                      </div>
                      <p className="font-semibold text-xl pt-2">
                        {image.title}
                      </p>
                      <p className="text-lg">{image.description}</p>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <button onClick={() => slider2?.current?.slickNext()}>
              <MdNavigateNext size={40} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
