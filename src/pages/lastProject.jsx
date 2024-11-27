import NavbarComponent from "../components/Navbar/navbar-component";
import { useMediaQuery } from "@mui/material";

export default function LastProject() {
  return (
    <>
      <NavbarComponent />
      <div className="w-full h-full flex flex-col justify-center items-center pt-[70px] font-montserrat bg-[#fbfbfb] text-[#303030] pb-10">
        {/* <img
          src={
            "https://res.cloudinary.com/dj6fwiz51/image/upload/v1731355297/soul-busy-wide_mydv28.png"
          }
          alt="Servics"
          className="w-full h-full object-cover"
          style={{
            height: useMediaQuery("(min-width: 768px)") ? "300px" : "300px",
          }}
        /> */}
        <div className="w-full h-full relative">
          <div
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dj6fwiz51/image/upload/v1731355297/soul-busy-wide_mydv28.png")`,
              backgroundSize: "cover",
              height: useMediaQuery("(min-width: 768px)") ? "300px" : "300px",
            }}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#323131] opacity-[0.21]" />
          </div>
        </div>

        <div className="w-full md:w-[60%] flex flex-col justify-center items-center text-lg text-center px-[36px] md:px-[0px]">
          <div className="w-fit flex flex-col justify-center items-center pt-14 pb-12">
            <h1 className="tracking-wide text-3xl md:text-4xl">
              Soul Business Habitat
            </h1>
            <div className="w-[70%] border-b-2 border-[#A20003]"></div>
          </div>
          <span className="w-full text-justify font-normal tracking-wide">
            A Soul Business Habitat é uma obra que redefine os padrões de
            excelência em infraestrutura elétrica e hidráulica. Projetada para
            suportar as mais altas demandas do mercado corporativo, cada sistema
            foi cuidadosamente planejado para garantir eficiência energética,
            segurança e durabilidade. As instalações elétricas de última geração
            oferecem uma distribuição de energia otimizada, enquanto as soluções
            hidráulicas garantem um abastecimento confiável e sustentável. Na
            Soul Business Habitat, a tecnologia e a inovação trabalham juntas
            para criar um ambiente de trabalho seguro, funcional e preparado
            para o futuro.
          </span>
        </div>
        <div className="w-[70%] flex flex-col md:grid md:grid-cols-2 md:grid-rows-4 py-5 gap-5"></div>
      </div>
    </>
  );
}
