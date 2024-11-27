import { useMediaQuery } from "@mui/material";
import Footer from "../components/Footer/footer-component";
import NavbarComponent from "../components/Navbar/navbar-component";
import { PartnershipPNG } from "../images";

const PartnershipServices = [
  {
    title: "Experiência e Confiabilidade",
    desc: "Com uma vasta experiência no mercado, somos reconhecidos por nossa capacidade de entregar projetos complexos dentro dos prazos e com padrões rigorosos de qualidade. Nossos parceiros contam com uma equipe técnica qualificada e comprometida em atender todas as especificações e regulamentações exigidas no setor.",
  },
  {
    title: "Soluções Integradas",
    desc: "Oferecemos soluções completas em instalações elétricas e hidráulicas, desde a fase de planejamento até a execução, manutenção e suporte técnico. Isso garante que nossos parceiros possam concentrar seus esforços em outras áreas do projeto, sabendo que estamos cuidando de todas as necessidades elétricas e hidráulicas com profissionalismo e precisão.",
  },
  {
    title: "Inovação e Sustentabilidade",
    desc: "Estamos sempre atualizados com as mais recentes tecnologias e práticas sustentáveis. Nossos projetos incluem soluções eficientes em termos de energia, automação e reuso de água, o que não só agrega valor ao empreendimento, mas também contribui para a sustentabilidade ambiental.",
  },
  {
    title: "Apoio e Consultoria Técnica",
    desc: "Oferecemos suporte técnico especializado e consultoria em todas as etapas do projeto, ajudando nossos parceiros a encontrar as melhores soluções para cada desafio. Desde a concepção do projeto até a emissão de laudos e certificações, estamos ao lado de nossos parceiros para garantir o sucesso de cada obra.",
  },
];

export default function PartnershipPage() {
  return (
    <>
      <NavbarComponent />
      <div className="w-full h-full flex flex-col justify-center items-center pt-[70px] font-montserrat bg-[#fbfbfb] text-[#303030] pb-10">
        <img
          src={PartnershipPNG}
          alt="Servics"
          className="w-full h-full object-cover"
          style={{
            height: useMediaQuery("(min-width: 768px)") ? "300px" : "300px",
          }}
        />
        <div className="w-full md:w-[60%] flex flex-col justify-center items-center text-lg text-center px-[36px] md:px-[0px]">
          <div className="w-fit flex flex-col justify-center items-center pt-14 pb-12">
            <h1 className="tracking-wide text-4xl">Parcerias</h1>
            <div className="w-[70%] border-b-2 border-[#A20003]"></div>
          </div>
          <span className="w-full text-justify font-normal tracking-wide">
            Na TJ, acreditamos que grandes projetos são construídos com base em
            parcerias sólidas e colaborativas. Ao longo dos anos, temos
            trabalhado lado a lado com empreiteiras, construtoras e outras
            empresas do setor de construção civil para entregar soluções
            elétricas e hidráulicas de alta qualidade para prédios comerciais e
            habitacionais.{" "}
          </span>
          {/* Por que se tornar nosso parceiro? */}
          <div className="w-full flex flex-col">
            <div className="w-full md:w-fit flex flex-col items-center py-7">
              <h3 className="font-bold text-lg">
                Por que se tornar nosso parceiro?
              </h3>
              <div className="w-2/5 md:w-[80%] border-b-2 border-[#A20003]"></div>
            </div>
            <div className="w-full flex">
              <ul className="w-full flex flex-col list-disc list-inside gap-[16px] md:gap-[8px]">
                {PartnershipServices.map((service, index) => {
                  return (
                    <li key={index} className="w-full flex flex-col">
                      <span className="font-semibold text-left">
                        {service.title}:{" "}
                      </span>{" "}
                      <span className="text-justify font-normal">
                        {service.desc}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/*  Nossos Parceiros */}
          <div className="w-full flex flex-col">
            <div className="w-full md:w-fit flex flex-col items-center py-7">
              <h3 className="font-bold text-lg">Nossos Parceiros</h3>
              <div className="w-2/5 md:w-[80%] border-b-2 border-[#A20003]"></div>
            </div>
            <div className="w-full flex text-justify">
              Ao longo de nossa trajetória, tivemos o privilégio de trabalhar
              com algumas das principais construtoras e empreiteiras do país,
              como Opus, Elmo e Habitat, em diversos projetos que marcaram o
              setor da construção civil. Essas parcerias nos permitiram
              colaborar em empreendimentos inovadores, sempre com o compromisso
              de entregar qualidade, inovação e segurança.
            </div>
          </div>

          {/* Junte-se a nós */}
          <div className="w-full flex flex-col">
            <div className="w-full md:w-fit flex flex-col items-center py-7">
              <h3 className="font-bold text-lg">Junte-se a nós</h3>
              <div className="w-2/5 md:w-[80%] border-b-2 border-[#A20003]"></div>
            </div>
            <div className="w-full flex text-justify">
              Se você procura um parceiro confiável para suas instalações
              elétricas e hidráulicas, estamos prontos para colaborar. Na TJ
              Instalações valorizamos cada parceria e sabemos que o sucesso dos
              projetos está na união de conhecimento, expertise e compromisso.
              <br />
              Entre em contato para descobrir como podemos, juntos, construir
              projetos de sucesso ao lado de grandes empreiteiras como Opus,
              Elmo e Habitat.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
