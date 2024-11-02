import Footer from "../components/Footer/footer-component";
import NavbarComponent from "../components/Navbar/navbar-component";
import { ServicesPNG } from "../images";

export default function ServicesPage() {

    return (
        <>
            <NavbarComponent />
            <div className="w-full h-full flex flex-col justify-center items-center pt-[70px] font-montserrat bg-[#fbfbfb] text-[#303030] pb-10">
                <img src={ServicesPNG} alt='Servics' className='w-full h-full object-cover' />
                <div className="w-[60%] flex flex-col justify-center items-center text-lg">
                    <div className="w-fit flex flex-col justify-center items-center py-14">
                        <h1 className="tracking-wide text-4xl">
                            Nossos serviços
                        </h1>
                        <div className="w-[70%] border-b-2 border-[#A20003]"></div>
                    </div>
                    <span className="w-full text-justify font-normal tracking-wide">
                        Na TJ Instalações, somos especializados em oferecer soluções completas em instalações elétricas e hidráulicas para projetos de construção de prédios comerciais e habitacionais. Como parceira de confiança para empreiteiras, garantimos a execução de todos os serviços com qualidade, segurança e dentro dos prazos estabelecidos. Confira abaixo nossos principais serviços:
                    </span>
                    {/* Instalações Elétricas */}
                    <div className="w-full flex flex-col">
                        <div className=" w-fit flex flex-col items-center py-7">
                            <h3 className="font-bold text-lg">
                                Instalações Elétricas
                            </h3>
                            <div className="w-[80%] border-b-2 border-[#A20003]"></div>
                        </div>
                        <div className="w-full flex">
                            <ul className="w-full flex flex-col list-disc list-inside gap-2">
                                <li className="w-full text-justify font-normal">
                                    Execução de Redes Elétricas: Desenvolvemos e implementamos redes de alta e baixa tensão, garantindo eficiência energética e total segurança em cada projeto.
                                </li>
                                <li className="w-full text-justify font-normal">
                                    Sistemas de Iluminação: Instalamos soluções de iluminação interna e externa, incluindo sistemas de emergência, com foco em economia e modernidade.
                                </li>
                                <li className="w-full text-justify font-normal">
                                    Quadros de Distribuição: Montamos e instalamos quadros elétricos de alta qualidade, garantindo uma distribuição de energia segura e eficiente.
                                </li>
                                <li className="w-full text-justify font-normal">
                                    Cabeamento Estruturado: Implantamos redes de cabeamento que suportam sistemas de telecomunicações, internet e outros serviços de TI.
                                </li>
                                <li className="w-full text-justify font-normal">
                                    Automação Residencial e Comercial: Integramos sistemas automatizados para controle de iluminação, temperatura e segurança, proporcionando mais conforto e economia de energia.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*  Instalações Hidráulicas */}
                    <div className="w-full flex flex-col">
                        <div className=" w-fit flex flex-col items-center py-7">
                            <h3 className="font-bold text-lg">
                                Instalações Hidráulicas
                            </h3>
                            <div className="w-[80%] border-b-2 border-[#A20003]"></div>
                        </div>
                        <div className="w-full flex">
                            <ul className="w-full flex flex-col list-disc list-inside gap-2">
                                <li className="w-full text-justify font-normal">
                                    Sistemas de Abastecimento de Água: Projetamos e instalamos redes de água fria e quente, utilizando materiais de alta durabilidade e eficiência.
                                </li>
                                <li className="w-full text-justify font-normal">
                                    Drenagem e Esgotamento Sanitário: Desenvolvemos sistemas de esgoto e drenagem pluvial que asseguram o manejo adequado de resíduos e águas pluviais.
                                </li>
                                <li className="w-full text-justify font-normal">
                                    Instalações de Gás: Implementamos redes de gás com foco na segurança e em conformidade com as normas vigentes.
                                </li>
                                <li className="w-full text-justify font-normal">
                                    Sistemas de Reuso de Água: Instalamos sistemas de captação e reuso de água, promovendo sustentabilidade e redução de custos operacionais.
                                </li>
                                <li className="w-full text-justify font-normal">
                                    Manutenção e Reparos Hidráulicos: Realizamos manutenção preventiva e corretiva em instalações hidráulicas, assegurando o funcionamento contínuo e evitando problemas futuros.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Consultoria e Assessoria Técnica */}
                    <div className="w-full flex flex-col">
                        <div className=" w-fit flex flex-col items-center py-7">
                            <h3 className="font-bold text-lg">
                                Consultoria e Assessoria Técnica
                            </h3>
                            <div className="w-[80%] border-b-2 border-[#A20003]"></div>
                        </div>
                        <div className="w-full flex">
                            <ul className="w-full flex flex-col list-disc list-inside gap-2">
                                <li className="w-full text-justify font-normal">
                                    Consultoria em Projetos: Oferecemos suporte técnico desde o planejamento até a execução, assegurando que as instalações elétricas e hidráulicas sigam as melhores práticas e regulamentações.
                                </li>
                                <li className="w-full text-justify font-normal">
                                    Gerenciamento de Obras: Supervisionamos e gerenciamos todas as etapas de instalação, garantindo prazos e qualidade.
                                </li>
                                <li className="w-full text-justify font-normal">
                                    Quadros de Distribuição: Montamos e instalamos quadros elétricos de alta qualidade, garantindo uma distribuição de energia segura e eficiente.
                                </li>
                                <li className="w-full text-justify font-normal">
                                    Laudos e Certificações: Emitimos laudos técnicos e certificações necessários para o correto funcionamento das instalações, de acordo com as normas vigentes.
                                </li>
                            </ul>
                        </div>
                        <div className="w-full text-justify py-2">
                            <span>
                                Nossa empresa é seu parceiro ideal para garantir que cada projeto seja concluído com excelência. Com uma equipe altamente qualificada e comprometida, entregamos soluções que superam as expectativas, sempre alinhadas com as melhores práticas do setor.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}