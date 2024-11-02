import { useMediaQuery } from "@mui/material";
import { Office, Soulbiz } from "../../images";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
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
    description: "Goiânia - GO",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730491218/images/gr0g4s8tj3mlcjijhkpf.png",
    title: "Zoe Habitat",
    description: "Goiânia - GO",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730491219/images/wnheelndnxbpruoxoldr.png",
    title: "Nature",
    description: "Palmas - TO",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730582304/other07_hvuagw.png",
    title: "Vivare",
    description: "Goiânia - GO",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730582298/other08_qoshj0.png",
    title: "Lux Oeste",
    description: "Goiânia - GO",
  },
  {
    src: "https://res.cloudinary.com/dj6fwiz51/image/upload/v1730582283/other09_uezxgd.png",
    title: "Laguna",
    description: "Palmas - TO",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2`}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    >
      <MdNavigateNext size={30} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2`}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    >
      <MdNavigateBefore size={30} />
    </div>
  );
}

export default function AboutComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const settings = {
    dots: true,
    speed: 450,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="w-full h-full text-center flex flex-col justify-between items-center gap-3 md:gap-0 font-montserrat text-[#303030]">
        <div
          style={{ height: "90vh" }}
          className="w-full h-full flex flex-col md:flex-row justify-center items-center"
        >
          <div className="w-full h-full flex justify-center items-center">
            <img
              src={Office}
              alt="Escritorio"
              className="w-[275px] md:w-[530px] h-[275px] md:h-[406px] object-cover"
            />
          </div>
          <div className="w-full h-full flex justify-center items-center px-20">
            <span className="text-2xl text-justify">
              Combinando expertise e inovação oferecemos soluções elétricas e
              hidráulicas que atendem suas necessidades e superam suas
              expectativas. Cada projeto é executado com atenção aos detalhes e
              compromisso com a qualidade.
            </span>
          </div>
        </div>
        <div
          style={{ height: "90vh" }}
          className="w-full h-full flex flex-col md:flex-row-reverse justify-center items-center"
        >
          <div className="w-full h-full flex justify-center items-center">
            <img
              src={Soulbiz}
              alt="Escritorio"
              className="w-[275px] md:w-[530px] h-[275px] md:h-[406px] object-cover"
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center px-20">
            <h1 className="text-3xl font-semibold pb-2">Soul Business</h1>
            <span className="text-2xl text-justify">
              O Soul Business é um edifício inovador que une design moderno e
              infraestrutura de ponta. A TJ cuida dos serviços elétricos e
              hidráulicos, garantindo eficiência e segurança. Nosso compromisso
              é oferecer soluções de alta qualidade, atendendo aos mais altos
              padrões. Estamos entusiasmados em contribuir para este projeto de
              destaque no setor.
            </span>
          </div>
        </div>
        <div className="w-full h-screen flex flex-col items-center overflow-hidden gap-5">
          <h3 className="tracking-wide text-4xl font-semibold">
            Outros Projetos
          </h3>
          <div className="h-[454px] w-[80%] gap-4">
            <Slider {...settings}>
              {images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center bg-white border-[1.5px] border-black px-[24px] md:px-[0px] pt-[0px] md:pt-[28px]"
                  >
                    <div className="flex justify-center items-center w-full h-[454px]">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="max-w-full max-h-full"
                      />
                    </div>
                    <p className="font-semibold text-xl pt-2">{image.title}</p>
                    <p className="text-lg">{image.description}</p>
                  </div>
                );
              })}
            </Slider>
          </div>
          {/* <motion.div className="flex flex-col bg-white border-[1.5px] border-black justify-center px-[26px] pt-[26px] pb-2">
            <img
              src={images[0].src}
              alt={images[0].title}
              className="w-[300px] h-[454px]"
            />
            <p>{images[0].title}</p>
            <p>{images[0].description}</p>
          </motion.div> */}
        </div>
      </div>
    </>
  );
}
