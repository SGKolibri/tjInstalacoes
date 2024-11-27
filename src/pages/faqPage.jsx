import Footer from "../components/Footer/footer-component";
import NavbarComponent from "../components/Navbar/navbar-component";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { FAQPNG } from "../images";
import { useMediaQuery } from "@mui/material";

export default function FAQPage() {
  const questions = [
    {
      question: "1. Quais serviços a empresa oferece?",
      answer:
        "A empresa oferece serviços completos de instalações elétricas e hidráulicas, incluindo redes de energia, sistemas de iluminação, abastecimento de água, esgoto, instalações de gás, sistemas de reuso de água, e manutenção de sistemas elétricos e hidráulicos.",
    },
    {
      question: "2. A empresa trabalha em projetos de grande porte?",
      answer:
        "Sim, a empresa é especializada em atuar em projetos de construção de prédios comerciais e habitacionais de grande porte, sendo contratada por empreiteiras para realizar instalações elétricas e hidráulicas.",
    },
    {
      question: "3. A empresa oferece manutenção pós-obra?",
      answer:
        "Sim, oferecemos serviços de manutenção preventiva e corretiva para garantir o funcionamento contínuo das instalações elétricas e hidráulicas, evitando problemas futuros.",
    },
    {
      question: "4. A empresa segue normas e regulamentações?",
      answer:
        "Sim, todos os nossos projetos e instalações seguem as normas técnicas e regulamentações vigentes, garantindo segurança e conformidade com os padrões do setor.",
    },
    {
      question: "5. A empresa também cuida de sistemas de segurança?",
      answer:
        "Sim, instalamos sistemas de combate a incêndio, como sprinklers e hidrantes, além de sistemas de monitoramento (CFTV) e controle de acesso para garantir a segurança dos prédios.",
    },
    {
      question: "6. A empresa presta consultoria técnica?",
      answer:
        "Sim, oferecemos consultoria técnica em todas as fases do projeto, desde o planejamento até a execução, além de emitir laudos técnicos e certificações necessárias.",
    },
    {
      question: "7. Como solicitar um orçamento para meu projeto?",
      answer:
        "Você pode entrar em contato conosco pelo telefone ou e-mail disponível no site. Nossa equipe fará uma avaliação detalhada e oferecerá um orçamento personalizado para o seu projeto.",
    },
    {
      question: "8. A empresa oferece garantia nos serviços realizados?",
      answer:
        "Sim, todos os serviços realizados pela empresa possuem garantia. Trabalhamos com materiais de alta qualidade e uma equipe qualificada para garantir a durabilidade e eficiência das instalações. Em caso de qualquer problema, nossa equipe está pronta para realizar ajustes e garantir a satisfação do cliente.",
    },
  ];

  return (
    <>
      <NavbarComponent />
      <div className="w-full h-full flex flex-col justify-center items-center pt-[70px] font-montserrat bg-[#fbfbfb] text-[#303030] pb-10">
        <img
          src={FAQPNG}
          alt="Servics"
          className="w-full h-full object-cover"
          style={{
            height: useMediaQuery("(min-width: 768px)") ? "300px" : "300px",
          }}
        />
        <div className="w-full md:w-[60%] flex flex-col justify-center items-center text-lg text-center px-[36px] md:px-[0px]">
          <div className="w-fit flex flex-col justify-center items-center pt-14 pb-12">
            <h1 className="tracking-wide text-3xl md:text-4xl">FAQ</h1>
            <div className="w-[70%] border-b-2 border-[#A20003]"></div>
          </div>
          <span className="w-full flex text-justify tracking-wide justify-center font-semibold">
            Serviços Elétricos e Hidráulicos
          </span>
        </div>
        <div className="w-[70%] flex flex-col md:grid md:grid-cols-2 md:grid-rows-4 py-5 gap-5">
          {questions.map((question, index) => (
            <div className="flex gap-2">
              <div className="h-full flex justify-center items-start">
                {/* <img src={Question} alt="Question" className="w-9 h-9" /> */}
                <RiQuestionAnswerFill className="w-9 h-9 text-[#303030]" />
              </div>
              <div
                key={index}
                className="w-full flex flex-col items-start justify-start"
              >
                <div className="w-full flex items-center justify-start gap-2">
                  <span className="font-semibold text-base">
                    {question.question}
                  </span>
                </div>
                <span className="w-full text-justify text-base font-normal tracking-wide">
                  {question.answer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
