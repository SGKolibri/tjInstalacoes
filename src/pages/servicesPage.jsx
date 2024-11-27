import { useMediaQuery } from "@mui/material";
import Footer from "../components/Footer/footer-component";
import NavbarComponent from "../components/Navbar/navbar-component";
import { ServicesPNG } from "../images";

const ElectricServices = [
  {
    title: "Execução de Redes Elétricas",
    desc: "Desenvolvemos e implementamos redes de alta e baixa tensão, garantindo eficiência energética e total segurança em cada projeto.",
  },
  {
    title: "Sistemas de Iluminação",
    desc: "Instalamos soluções de iluminação interna e externa, incluindo sistemas de emergência, com foco em economia e modernidade.",
  },
  {
    title: "Quadros de Distribuição",
    desc: "Montamos e instalamos quadros elétricos de alta qualidade, garantindo uma distribuição de energia segura e eficiente.",
  },
  {
    title: "Cabeamento Estruturado",
    desc: "Implantamos redes de cabeamento que suportam sistemas de telecomunicações, internet e outros serviços de TI.",
  },
  {
    title: "Automação Residencial e Comercial",
    desc: "Integramos sistemas automatizados para controle de iluminação, temperatura e segurança, proporcionando mais conforto e economia de energia.",
  },
];

const HidraulicServices = [
  {
    title: "Sistemas de Abastecimento de Água",
    desc: "Projetamos e instalamos redes de água fria e quente, utilizando materiais de alta durabilidade e eficiência.",
  },
  {
    title: "Drenagem e Esgotamento Sanitário",
    desc: "Desenvolvemos sistemas de esgoto e drenagem pluvial que asseguram o manejo adequado de resíduos e águas pluviais.",
  },
  {
    title: "Instalações de Gás",
    desc: "Implementamos redes de gás com foco na segurança e em conformidade com as normas vigentes.",
  },
  {
    title: "Sistemas de Reuso de Água",
    desc: "Instalamos sistemas de captação e reuso de água, promovendo sustentabilidade e redução de custos operacionais.",
  },
  {
    title: "Manutenção e Reparos Hidráulicos",
    desc: "Realizamos manutenção preventiva e corretiva em instalações hidráulicas, assegurando o funcionamento contínuo e evitando problemas futuros.",
  },
];

const ConsultancyServices = [
  {
    title: "Consultoria em Projetos",
    desc: "Oferecemos suporte técnico desde o planejamento até a execução, assegurando que as instalações elétricas e hidráulicas sigam as melhores práticas e regulamentações.",
  },
  {
    title: "Gerenciamento de Obras",
    desc: "Supervisionamos e gerenciamos todas as etapas de instalação, garantindo prazos e qualidade.",
  },
  {
    title: "Quadros de Distribuição",
    desc: "Montamos e instalamos quadros elétricos de alta qualidade, garantindo uma distribuição de energia segura e eficiente.",
  },
  {
    title: "Laudos e Certificações",
    desc: "Emitimos laudos técnicos e certificações necessários para o correto funcionamento das instalações, de acordo com as normas vigentes.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <NavbarComponent />
      <div className="w-full h-full flex flex-col justify-center items-center pt-[70px] font-montserrat bg-[#fbfbfb] text-[#303030] pb-10">
        <img
          src={ServicesPNG}
          alt="Servics"
          className="w-full h-full object-cover"
          style={{
            height: useMediaQuery("(min-width: 768px)") ? "300px" : "300px",
          }}
        />
        <div className="w-full md:w-[60%] flex flex-col justify-center items-center text-lg text-center px-[36px] md:px-[0px]">
          <div className="w-fit flex flex-col justify-center items-center py-14 px-[4px] md:px-[0px]">
            <h1 className="tracking-wide font-semibold text-3xl md:text-4xl">
              Nossos serviços
            </h1>
            <div className="w-[70%] border-b-2 border-[#A20003]"></div>
          </div>
          <span className="w-full text-justify font-normal tracking-wide">
            Na TJ Instalações, somos especializados em oferecer soluções
            completas em instalações elétricas e hidráulicas para projetos de
            construção de prédios comerciais e habitacionais. Como parceira de
            confiança para empreiteiras, garantimos a execução de todos os
            serviços com qualidade, segurança e dentro dos prazos estabelecidos.
            Confira abaixo nossos principais serviços:
          </span>
          {/* Instalações Elétricas */}
          <div className="w-full flex flex-col">
            <div className="w-full md:w-fit flex flex-col items-center py-7 px-[4px] md:px-[0px]">
              <h3 className="font-bold text-lg">Instalações Elétricas</h3>
              <div className="w-[40%] md:w-[80%] border-b-2 border-[#A20003]"></div>
            </div>
            <div className="w-full flex">
              <ul className="w-full flex flex-col list-disc list-inside gap-[16px] md:gap-[8px]">
                {ElectricServices.map((service, index) => {
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

          {/*  Instalações Hidráulicas */}
          <div className="w-full flex flex-col">
            <div className="w-full md:w-fit flex flex-col items-center py-7 px-[4px] md:px-[0px]">
              <h3 className="font-bold text-lg">Instalações Hidráulicas</h3>
              <div className="w-[40%] md:w-[80%] border-b-2 border-[#A20003]"></div>
            </div>
            <div className="w-full flex">
              <ul className="w-full flex flex-col list-disc list-inside gap-[16px] md:gap-[8px]">
                {HidraulicServices.map((service, index) => {
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

          {/* Consultoria e Assessoria Técnica */}
          <div className="w-full flex flex-col">
            <div className="w-full md:w-fit flex flex-col items-center py-7 px-[4px] md:px-[0px]">
              <h3 className="font-bold text-lg">
                Consultoria e Assessoria Técnica
              </h3>
              <div className="w-[40%] md:w-[80%] border-b-2 border-[#A20003]"></div>
            </div>
            <div className="w-full flex">
              <ul className="w-full flex flex-col list-disc list-inside gap-[16px] md:gap-[8px]">
                {ConsultancyServices.map((service, index) => {
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
            <div className="w-full py-2 text-justify">
              <span className="">
                Nossa empresa é seu parceiro ideal para garantir que cada
                projeto seja concluído com excelência. Com uma equipe altamente
                qualificada e comprometida, entregamos soluções que superam as
                expectativas, sempre alinhadas com as melhores práticas do
                setor.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
