import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import { Alert, InputAdornment } from '@mui/material';
import { Excellence, Lightbulb, PartnershipPNG, Seal, Security, WorkPNG } from "../images";
import { TextField } from "@mui/material";
import { FaDeleteLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import NavbarComponent from "../components/Navbar/navbar-component";
import Footer from "../components/Footer/footer-component";

export default function WorkPage() {

    const [curriculo, setCurriculo] = useState("");

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");

    const muiSnackAlert = (severity, message) => {
        setSeverity(severity);
        setMessage(message);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert
                    severity={severity}
                    sx={{ width: '100%' }}
                    onClose={handleClose}
                >
                    {message}
                </Alert>
            </Snackbar>
            <NavbarComponent />
            <div className="w-full h-full flex flex-col justify-center items-center pt-[70px] font-montserrat bg-[#fbfbfb] text-[#303030] pb-14">
                <img src={WorkPNG} alt='Servics' className='w-full h-full object-cover' />
                <div className="w-[60%] flex flex-col justify-center items-center text-lg">
                    <div className="w-fit flex flex-col justify-center items-center pt-14 pb-12">
                        <h1 className="tracking-wide text-4xl">
                            Por que trabalhar na TJ?
                        </h1>
                        <div className="w-[70%] border-b-2 border-[#A20003]"></div>
                    </div>
                    <span className="w-full text-justify font-normal tracking-wide">
                        Trabalhar TJ Instalações é fazer parte de uma equipe comprometida com a excelência e a segurança em cada projeto. Valorizamos o desenvolvimento contínuo dos nossos colaboradores, oferecendo um ambiente de trabalho colaborativo, onde inovação e qualidade são nossas prioridades. Aqui, você terá a oportunidade de crescer profissionalmente, enfrentando desafios que impulsionam sua carreira, enquanto contribui para a satisfação dos nossos clientes e a construção de soluções eficientes e duradouras.
                    </span>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-5">
                    <div className="w-fit flex flex-col justify-center items-center pt-14">
                        <h1 className="tracking-wide text-4xl">
                            Nossos valores
                        </h1>
                        <div className="w-[70%] border-b-2 border-[#A20003]"></div>
                    </div>
                    <div className="w-[80%] flex justify-between">
                        <div className="w-[25%] flex flex-col items-center gap-2.5">
                            {/* image */}
                            <img src={Lightbulb} alt="Inovacao" className="w-[54px] h-[54px]" />
                            {/* title */}
                            <span className="font-semibold">
                                Segurança em primeiro lugar
                            </span>
                            {/* desc */}
                            <span className="text-justify">
                                Em nossa empresa, priorizamos a segurança e o bem-estar de todos acima de tudo. Acreditamos que para oferecer o melhor serviço, é essencial que nossa equipe e clientes estejam sempre protegidos e saudáveis. Seu bem-estar é nossa principal preocupação, guiando cada decisão e ação que tomamos.
                            </span>
                        </div>
                        <div className="w-[25%] flex flex-col items-center gap-2.5">
                            {/* image */}
                            <img src={Seal} alt="Honesty" className="w-[54px] h-[54px]" />
                            {/* title */}
                            <span className="font-semibold">
                                Honestidade e Seriedade
                            </span>
                            {/* desc */}
                            <span className="text-justify">
                                Confiança e integridade fundamentam todas as nossas relações, tanto internas quanto externas. Acreditamos que a ética, a transparência e o respeito são essenciais para construir uma base sólida e orientar nossas ações e decisões no mundo dos negócios.
                            </span>
                        </div>
                        <div className="w-[25%] flex flex-col items-center gap-2.5">
                            {/* image */}
                            <img src={Excellence} alt="Excelencia" className="w-[39px] h-[54px]" />
                            {/* title */}
                            <span className="font-semibold">
                                Qualidade e Excelência
                            </span>
                            {/* desc */}
                            <span className="text-justify">
                                Nosso compromisso com a excelência é guiado pela humildade em cada ação. Valorizamos o impacto de nossa empresa e reconhecemos tanto os resultados individuais quanto os coletivos. Recompensamos o desempenho com meritocracia e celebramos cada conquista com entusiasmo.
                            </span>
                        </div>
                    </div>
                    <div className="w-[80%] flex justify-between">
                        <div className="w-[40%] flex flex-col">
                            <div className="w-full flex items-center gap-4">
                                <img src={Security} alt="Seguranca" className="w-[68px] h-[68px]" />
                                <span className="text-xl font-semibold">
                                    Trabalhe conosco
                                </span>
                            </div>
                            <span className="text-justify">
                                Estamos em busca de novos talentos para integrar nossa equipe. Se você é um profissional dedicado e apaixonado pelo que faz, envie seu currículo através dos campos abaixo. Manteremos seu perfil em nosso banco de dados e, caso apareça uma oportunidade que corresponda às suas habilidades, entraremos em contato.
                            </span>
                        </div>
                        <div className="w-[40%] flex flex-col gap-3 justify-center">
                            <div className="w-full">
                                <TextField fullWidth variant="outlined" size="small" label="Nome Completo" />
                            </div>
                            <div className="w-full">
                                <TextField fullWidth variant="outlined" size="small" label="Email" />
                            </div>
                            <div className="w-full">
                                <TextField fullWidth variant="outlined" size="small" label="Contato" />
                            </div>
                            <div className="w-full flex gap-2">
                                <TextField fullWidth variant="outlined" disabled size="small" label={`${curriculo.name ? curriculo.name : "Anexar currículo"}`}
                                    InputProps={{
                                        endAdornment: curriculo && (
                                            <InputAdornment position="end">
                                                <FaDeleteLeft
                                                    className="text-black cursor-pointer w-5 h-5"
                                                    title="Remover currículo"
                                                    disabled={!curriculo}
                                                    onClick={() => {
                                                        setCurriculo("")
                                                        muiSnackAlert("info", "Currículo removido com sucesso.")
                                                    }}
                                                />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <motion.label title="Enviar currículo em formato PDF" className="px-4 py-2 flex text-white bg-black rounded-md cursor-pointer">
                                    Anexar
                                    <input type="file" className="hidden" accept=".pdf" onChange={(e) => {
                                        setCurriculo(e.target.files[0]);
                                        muiSnackAlert("success", "Currículo anexado com sucesso!")
                                    }} />
                                </motion.label>
                            </div>
                            <div className="w-full flex justify-center">
                                <motion.button className="px-5 py-2 text-white bg-black rounded-md">
                                    Enviar
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}